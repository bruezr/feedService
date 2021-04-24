const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
    minlenght: 2,
  },
  date: Date,
});

module.exports = mongoose.model("Post", postSchema);
