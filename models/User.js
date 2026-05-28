

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    sessionToken: { type: String, default: null }, // Store session token for tracking active session
});

const User = mongoose.model("User", userSchema);
module.exports = User;