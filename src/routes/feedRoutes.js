const express = require("express");
const router = express.Router();
const feedControllers = require("../controllers/feedControllers");
const auth = require("../middleware/auth");

router.get("/posts", feedControllers.getPosts);

router.get("/posts/:postId", feedControllers.getPost);

router.post("/posts", auth, feedControllers.createPost);

router.put("/posts/:postId", auth, feedControllers.updatePost);

router.delete("/posts/:postId", auth, feedControllers.deletePost);

module.exports = router;
