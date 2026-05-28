const mongoose = require("mongoose");

const quizHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Store user ID
  quizName: { type: String, required: true },
  totalQuestions: { type: Number, required: true },
  marksObtained: { type: Number, required: true },
  attemptedDate: { type: Date, default: Date.now },
});

const QuizHistory = mongoose.model("QuizHistory", quizHistorySchema);

module.exports = QuizHistory;
