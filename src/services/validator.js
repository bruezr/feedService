const Ajv = require("ajv");
const ajv = new Ajv();

const postJson = require("./postSchema.json");
const userJson = require("./userSchema.json");

exports.postValidator = ajv.compile(postJson);
exports.userValidator = ajv.compile(userJson);
