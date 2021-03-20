const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnection;
