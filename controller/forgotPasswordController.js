const User = require("../models/User");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const otpStore = new Map(); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.sendForgotPasswordOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

    const otp = generateOTP();
    otpStore.set(email, otp);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for resetting the password is: ${otp}. It is valid for 5 minutes.`,
    });

    res.json({ msg: "OTP sent to email!" });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

exports.verifyOTPAndResetPassword = async (req, res) => {
    try {
      const { email, otp, newPassword } = req.body;
  
      if (!otpStore.has(email) || otpStore.get(email) !== otp) {
        return res.status(400).json({ msg: "Invalid or expired OTP!" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "User not found!" });
      }
  
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
  
      await user.save();
      otpStore.delete(email); 
  
      res.json({ msg: "Password reset successful!" });
    } catch (error) {
      res.status(500).json({ msg: "Server error", error });
    }
  };