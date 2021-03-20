const express = require("express");
const router = express.Router();
const feedControllers = require("../controllers/feed_controllers");

router.get("/posts", feedControllers.getPosts);

module.exports = router;
