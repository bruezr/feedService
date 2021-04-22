const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 5,
  },
});

userShema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, jwtPrivateKey);
  return token;
};

module.exports = mongoose.model("User", userShema);
