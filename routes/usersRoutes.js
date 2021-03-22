const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");

router.post("/", usersControllers.postUser);

module.exports = router;
