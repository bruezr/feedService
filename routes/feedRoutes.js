const express = require("express");
const router = express.Router();
const feedControllers = require("../controllers/feedControllers");

router.get("/posts", feedControllers.getPosts);

router.post("/post", feedControllers.createPost);

module.exports = router;
