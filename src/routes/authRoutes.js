const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

router.post("/", authControllers.loginUser);

module.exports = router;
