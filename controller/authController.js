const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const otpStore = new Map();

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// Email Template Function
const generateEmailTemplate = (otp) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quizzer - Verify Your Email</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f7fa;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .email-header {
          background: linear-gradient(90deg, #6b5df6 0%, #4b36d4 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        
        .logo {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .tagline {
          font-size: 14px;
          opacity: 0.9;
          margin-top: 5px;
        }
        
        .email-body {
          padding: 40px 30px;
          color: #333;
        }
        
        .greeting {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .message {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .otp-container {
          background-color: #f8f9ff;
          border: 1px solid #e1e5f2;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin: 25px 0;
        }
        
        .otp-label {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 10px;
        }
        
        .otp-value {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 5px;
          color: #4b36d4;
        }
        
        .expiry-notice {
          font-size: 13px;
          color: #dc2626;
          margin-top: 8px;
        }
        
        .help-text {
          font-size: 14px;
          color: #6b7280;
          margin-top: 25px;
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }
        
        .email-footer {
          background-color: #f8f9ff;
          padding: 20px;
          text-align: center;
          color: #6b7280;
          font-size: 12px;
          border-top: 1px solid #e5e7eb;
        }
        
        .social-links {
          margin: 15px 0;
        }
        
        .social-link {
          display: inline-block;
          margin: 0 8px;
          color: #6b5df6;
          text-decoration: none;
        }
        
        @media only screen and (max-width: 480px) {
          .email-body {
            padding: 30px 20px;
          }
          
          .otp-value {
            font-size: 28px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <div class="logo">Quizzer</div>
          <div class="tagline">Your NPTEL Exam Preparation Partner</div>
        </div>
        
        <div class="email-body">
          <div class="greeting">Verify Your Email</div>
          <div class="message">
            Thank you for signing up with Quizzer. To complete your registration and access our NPTEL exam preparation resources, please verify your email address using the OTP below.
          </div>
          
          <div class="otp-container">
            <div class="otp-label">Your One-Time Password</div>
            <div class="otp-value">${otp}</div>
            <div class="expiry-notice">This OTP will expire in 5 minutes</div>
          </div>
          
          <div class="message">
            If you did not request this OTP, please ignore this email or contact our support team if you have any concerns.
          </div>
          
          <div class="help-text">
            Need help? Contact us at <a href="mailto:business.project.data@gmail.com" style="color: #4b36d4;">support@quizzer.com</a>
          </div>
        </div>
        
        <div class="email-footer">
          <div>© ${new Date().getFullYear()} Quizzer. All rights reserved.</div>
          <div class="social-links">
            
            <a href="https://www.linkedin.com/in/satra1/" class="social-link">LinkedIn</a>
          </div>
          <div>Quizzer - Helping students ace their NPTEL exams</div>
        </div>
      </div>
    </body>
    </html>
  `;
};

/** SIGNUP - Generate OTP and Send Email */
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "Email already exists" });

    const otp = crypto.randomInt(100000, 999999).toString();

    otpStore.set(email, {
      otp,
      name,
      password,
      expiresAt: Date.now() + 300000, // OTP expires in 5 minutes
    });

    const mailOptions = {
      to: email,
      subject: "Quizzer - Verify Your Email",
      html: generateEmailTemplate(otp),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: "OTP sent to email! Please verify your account." });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

/** VERIFY OTP - Create User */
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const storedOtpData = otpStore.get(email);
    if (!storedOtpData) {
      return res.status(400).json({ msg: "OTP expired or invalid" });
    }

    if (storedOtpData.otp !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    const hashedPassword = await bcrypt.hash(storedOtpData.password, 10);

    const newUser = new User({
      name: storedOtpData.name,
      email,
      password: hashedPassword,
      isVerified: true,
    });

    await newUser.save();
    otpStore.delete(email);

    res.status(200).json({ msg: "Email verified successfully! Please login." });
  } catch (error) {
    console.error("OTP Verification Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

/** LOGIN - Authenticate User & Store Session */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Please verify your email first" });
    }


    const newSessionToken = crypto.randomBytes(32).toString("hex");

    await User.updateOne({ _id: user._id }, { sessionToken: newSessionToken });

    req.session.userId = user._id;
    req.session.sessionToken = newSessionToken;


    res.status(200).json({ success: true, message: "Login successful", redirect: "/dashboard" });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/** LOGOUT - Destroy Session */
exports.logout = async (req, res) => {
  try {
    if (req.session.userId) {
      await User.findByIdAndUpdate(req.session.userId, { sessionToken: null });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Logout Error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }
      res.redirect("/home" );
    });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
