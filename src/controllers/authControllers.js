const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("Este usuario ya esta registrado");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) return res.status(400).send("Usuario o email invalido");

    const token = user.generateAuthToken();
    res.json(token);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
