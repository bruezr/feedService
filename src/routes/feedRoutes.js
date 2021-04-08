const express = require("express");
const router = express.Router();
const feedControllers = require("../controllers/feedControllers");
const auth = require("../middleware/auth");

router.get("/posts", feedControllers.getPosts);

router.get("/post/:postId", feedControllers.getPost);

router.post("/post", auth, feedControllers.createPost);

router.put("/post/:postId", auth, feedControllers.updatePost);

router.delete("/post/:postId", auth, feedControllers.deletePost);

module.exports = router;
