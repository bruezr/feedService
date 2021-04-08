const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../models/.env" });

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json("Acceso denegado");

  try {
    const decodedPayload = jwt.verify(token, jwtPrivateKey);
    req.user = decodedPayload;
    next();
  } catch (error) {
    error.statusCode = 400;
    error.message = "Invalid token";
    next(error);
  }
};
