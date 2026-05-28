const User = require("../models/User");
const jwt = require("jsonwebtoken");


const authenticate = async (req, res, next) => {
  if (!req.session || !req.session.userId || !req.session.sessionToken) {
    return res.redirect("/Quiz/login"); // Redirect if no session exists
  }

  try {
    const user = await User.findById(req.session.userId);

    if (!user || user.sessionToken !== req.session.sessionToken) {
      req.session.destroy(); // Destroy session
      return res.redirect("/Quiz/login"); // Redirect to login
    }

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = authenticate;