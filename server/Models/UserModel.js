const mongoose = require("mongoose");
const joi = require("joi");

let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  is_Remember: { type: Boolean, required: true },
});

const Users = new mongoose.model("Users", userSchema);

const schema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required().min(10).max(10),
  password: joi
    .string()
    .pattern(new RegExp("^^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,14}$"))
    .min(6)
    .max(14),
  is_Remember: joi.boolean(),
});

exports.Users = Users;
exports.schema = schema;
