const mongoose = require("mongoose");
require("dotenv").config();

// const dburl = 'mongodb+srv://Project:ProjectSS%40123@cluster0.x79yd.mongodb.net/your-database-name?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
