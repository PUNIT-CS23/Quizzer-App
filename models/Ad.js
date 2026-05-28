const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  contact: { type: String, required: true },
  socialLink: { type: String }, 
});


const Ad = mongoose.model("Ad", adSchema);
module.exports = Ad;
