const express = require("express");
const router = express.Router();
const feedControllers = require("../controllers/feedControllers");

router.get("/posts", feedControllers.getPosts);

router.get("/post/:postId", feedControllers.getPost);

router.post("/post", feedControllers.createPost);

router.put("/post/:postId", feedControllers.updatePost);

router.delete("/post/:postId", feedControllers.deletePost);

module.exports = router;
