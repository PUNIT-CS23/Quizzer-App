const express = require('express');
const { signup, login, logout, verifyOtp,} = require('../controller/authController');
const { sendForgotPasswordOTP, verifyOTPAndResetPassword } = require("../controller/forgotPasswordController")

const router = express.Router();

// DATE 4 MARCH YAHA MAINE CHANGE KIYA H   
const authenticate = require("../middleware/authMiddleware"); // Import the middleware


router.get("/signup", (req, res) => res.render("signup"));
router.get("/login", (req, res) => res.render("login"));
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/verify-otp", verifyOtp);
router.post("/forgot-password", sendForgotPasswordOTP);
router.post("/reset-password", verifyOTPAndResetPassword)
// DATE 4 MARCH YAHA MAINE CHANGE KIYA H 

router.get("/check-session", authenticate, (req, res) => {
    if (!req.session || !req.session.userId) {
      return res.status(401).json({ msg: "Session expired" });
    }
    res.status(200).json({ msg: "Session active" });
  });
  
router.get("/check-session", (req, res) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: "Session expired" });
    }
    res.status(200).json({ message: "Session active" });
});


  


module.exports = router;