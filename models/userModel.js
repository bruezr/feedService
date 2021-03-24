const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/.env" });

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlenght: 5,
  },
  email: {
    type: String,
    required: true,
    maxlength: 255,
    minlenght: 5,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlenght: 5,
  },
});

userShema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, jwtPrivateKey);
  return token;
};

module.exports = mongoose.model("User", userShema);
