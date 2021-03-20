const { reset } = require("nodemon");
const Post = require("../models/postModel");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    let post = new Post({
      title: req.body.title,
      description: req.body.description,
    });

    post = await post.save();
    res.status(201).json(post);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
