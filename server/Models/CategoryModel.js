const mongoose = require("mongoose");
const joi = require("joi");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);

const Schema = joi.object({
  name: joi.string().required(),
});

exports.Category = Category;
exports.Schema = Schema;
