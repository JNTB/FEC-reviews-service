const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviews");

const reviewSchema = new mongoose.Schema({
  user: String,
  date: String,
  user_img: String,
  comment: String
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
