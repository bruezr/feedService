const User = require("../models/userModel");
const { userValidator } = require("../services/validator");
const bcrypt = require("bcrypt");

exports.postUser = async (req, res, next) => {
  const validationResult = userValidator(req.body);

  try {
    if (!validationResult) throw new Error("Validation Error");

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Este usuario ya esta registrado");

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      date: new Date(),
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();

    res
      .header("x-auth-token", token)
      .send({ name: user.name, email: user.email });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
