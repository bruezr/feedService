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

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 404;
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

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    if (!error.statusCode) {
      error.status = 500;
    }
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    if (!error.statusCode) {
      error.status = 500;
    }
    next(error);
  }
};
