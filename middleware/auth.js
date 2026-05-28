
const User = require("../models/User");

const isLoggedin = async (req, res, next) => {
  if (!req.session || !req.session.userId || !req.session.sessionToken) {
    return res.redirect("/Quiz/login");
  }

  try {
    const user = await User.findById(req.session.userId);

    if (!user || user.sessionToken !== req.session.sessionToken) {
      req.session.destroy(() => {
        res.clearCookie("connect.sid"); // Clear session cookie
        return res.redirect("/Quiz/login");
      });
      return;
    }

    req.user = user; // Attach user info to request
    next();
  } catch (error) {
    console.error("Session Validation Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = isLoggedin;