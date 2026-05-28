const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieparser=require('cookie-parser')
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);


dotenv.config();

connectDB();

const app = express();


const store = new MongoDBStore({
    uri: process.env.MONGO_URI, //
    collection: "sessions"
});

store.on("error", function (error) {
    console.log("Session Store Error:", error);
});

// Configure express-session
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        secure: process.env.NODE_ENV === "production", 
        httpOnly: true,
      
        maxAge: 1000 * 60 * 60 * 24 
    }
}));

// Middlewares
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use((req, res, next) => {
    next();
});

// Set View engine
app.set('view engine', 'ejs');
app.set('views', './views');  

// ROUTES
app.use('/payment', require('./routes/payment'));
app.use('/Quiz', require("./routes/authRoutes"));
app.use('/', require('./routes/viewRoutes')); 




// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));