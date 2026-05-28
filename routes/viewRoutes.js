const express = require("express");
const path = require("path");
const router = express.Router();
const isLoggedin = require("../middleware/auth");
const QuizHistory = require("../models/QuizHistory");
const session = require("express-session");
const Ad = require("../models/Ad");
const authenticate = require("../middleware/authMiddleware");
const User = require("../models/User");
const checkPremium = require("../middleware/checkPremium");


router.use(
  session({
    secret: process.env.Secret_id, // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
  })
);

router.get("/home", (req, res) => res.render("index"));
router.get("/policy", (req, res) => res.render("policy"));
router.get("/about", (req, res) => res.render("about"));
router.get("/contact", (req, res) => res.render("contact"));
router.get("/terms", (req, res) => res.render("policy"));

router.get("/material", (req, res) => res.render("material/material"));


// Serve dashboard.html from public folder
router.get("/dashboard", isLoggedin, authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "dashboard.html"));
});

// Serve Quiz files
router.get("/Quiz/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz.html"));
});


router.get("/Quiz2/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz2.html"));
});

router.get("/Quiz3/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz3.html"));
});

router.get("/Quiz4/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz4.html"));
});

router.get("/Quiz5/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz5.html"));
});

router.get("/Quiz6/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz6.html"));
});

router.get("/Quiz7/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz7.html"));
});

router.get("/Quiz8/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Quiz8.html"));
});

router.get("/Organizational-Behaviour/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Organizational-Behaviour.html"));
});

router.get("/LeaderShip/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "LeaderShip.html"));
});

router.get("/Environmental/Start", isLoggedin,checkPremium, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "Environmental.html"));
});

// Logout route
router.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/home");
});


router.post("/save-quiz-history", isLoggedin, async (req, res) => {
    try {
        const userId = req.user._id; // Get user ID from JWT
        const { quizName, totalQuestions, marksObtained, attemptedDate } = req.body;

        if (!marksObtained) {
            return res.status(400).json({ message: "Marks are required" });
        }

        const newQuizHistory = new QuizHistory({
            userId,
            quizName,
            totalQuestions,
            marksObtained,
            attemptedDate: attemptedDate || new Date(),
        });

        await newQuizHistory.save();
        res.status(201).json({ message: "Quiz history saved successfully" });
    } catch (error) {
        console.error("Error saving quiz history:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get("/quiz-history", isLoggedin, async (req, res) => {
  try {
      const userId = req.user._id; 
      const history = await QuizHistory.find({ userId });

      res.render("history", { quizHistory: history });
  } catch (error) {
      console.error("Error fetching quiz history:", error);
      res.status(500).send("Server Error");
  }
});


//admin

const ADMIN_PIN = "1234";
const checkAdminAuth = (req, res, next) => {
  if (req.session.adminAuthenticated) {
    return next();
  }
  res.redirect("/qadmin-pin");
};


router.get("/qadmin-pin", (req, res) => {
  res.render("qadmin-pin", { error: null });
});

router.post("/qadmin-pin", (req, res) => {
  const { pin } = req.body;

  if (pin === ADMIN_PIN) {
    req.session.adminAuthenticated = true; 
    return res.redirect("/qadmin"); 
  }

  res.render("qadmin-pin", { error: "Incorrect PIN. Try again." });
});


router.get("/qadmin", checkAdminAuth, async (req, res) => {
  try {
    const ads = await Ad.find(); // Fetch all ads from DB
    res.render("admin", { ads });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/logout-admin", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/qadmin-pin"); 
  });
});


router.get("/leaderboard", async (req, res) => {
  try {
    // Aggregate total marks and total questions per user
    const aggregatedData = await QuizHistory.aggregate([
      {
        $group: {
          _id: "$userId", // Group by userId
          totalMarks: { $sum: "$marksObtained" }, // Sum marks
          totalQuestions: { $sum: "$totalQuestions" }, // Sum total questions
        },
      },
      {
        $lookup: {
          from: "users", // Match with Users collection
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user", // Convert array into an object
      },
      {
        $project: {
          name: "$user.name", // Get the user's name
          percentage: {
            $round: [
              { $multiply: [{ $divide: ["$totalMarks", "$totalQuestions"] }, 100] },
              2,
            ], // Calculate and round percentage to 2 decimal places
          },
        },
      },
      {
        $sort: { percentage: -1 }, // Sort by highest percentage
      },
    ]);

    res.render("material/leaderboard", { leaderboardData: aggregatedData });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching leaderboard data");
  }
});


// Ads 


router.get("/get-random-ad", async (req, res) => {
  try {
      const ads = await Ad.find();
      if (ads.length === 0) {
          return res.status(404).json({ message: "No ads available" });
      }
      const randomAd = ads[Math.floor(Math.random() * ads.length)];
      res.json(randomAd);
  } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
  }
});


// Add Ad
router.post("/add-ad", async (req, res) => {
  try {
      const { title, imageUrl, contact, socialLink } = req.body; // Added socialLink

      const newAd = new Ad({
          title,
          imageUrl,
          contact,
          socialLink, // Save social link
      });

      await newAd.save();
      res.status(201).json({ message: "Ad added successfully!" });
  } catch (error) {
      res.status(500).json({ message: "Error adding ad", error });
  }
});



// Delete Ad
router.post("/delete-ad/:id", checkAdminAuth, async (req, res) => {
  try {
    await Ad.findByIdAndDelete(req.params.id);
    res.redirect("/qadmin");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting ad");
  }
});





// 404 errors
router.all("*", (req, res) => {
  res.status(404).render("error");
});

module.exports = router;
