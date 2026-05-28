const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const User = require("../models/User");


// Verify Payment Route
router.post("/verify-payment", async (req, res) => {
  

    if (!req.body) {
      
        return res.status(400).json({ success: false, error: "Request body is missing" });
    }

    

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    
        return res.status(400).json({ success: false, error: "Invalid payment details" });
    }

    try {
        const generated_signature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generated_signature !== razorpay_signature) {
        
            return res.status(400).json({ success: false, error: "Invalid signature" });
        }

        console.log("✅ Payment Verified!");

        // Find user
        const user = await User.findById(req.session.userId);

        if (!user) {
         
            return res.status(404).json({ success: false, error: "User not found" });
        }

        user.isPaid = true;
        await user.save();

      

        return res.json({ success: true, message: "Payment verified successfully!" });

    } catch (error) {
       
        return res.status(500).json({ success: false, error: "Server error" });
    }
});


router.get("/status", async (req, res) => {
    if (!req.session.userId) {
        return res.json({ success: false, isPaid: false, error: "User not logged in" });
    }

    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.json({ success: false, isPaid: false, error: "User not found" });
        }

        return res.json({ success: true, isPaid: user.isPaid });
    } catch (error) {
       
        return res.status(500).json({ success: false, error: "Server error" });
    }
});


module.exports = router;
