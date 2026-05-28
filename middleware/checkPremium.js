const User = require("../models/User"); // Adjust path as needed
const Razorpay = require("razorpay");
const crypto = require("crypto");

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Middleware to check premium access
const checkPremium = async (req, res, next) => {
  try {
    const userId = req.session.userId; // Fetch user ID from session


    if (!userId) {
   
      return res.redirect("/login"); // Redirect if not authenticated
    }

    // Fetch user from DB
    const user = await User.findById(userId);
    if (!user) {
  
      return res.status(404).json({ error: "User not found" });
    }

    if (user.isPaid) {
   
      return next(); // User has premium, allow access
    }


  
    const options = {
      amount: 2900, 
      currency: "INR",
      receipt: `order_rcptid_${userId}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
 

    req.session.orderId = order.id;

    return res.render("material/payment", { orderId: order.id, key: razorpay.key_id });

  } catch (error) {
   
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = checkPremium;
