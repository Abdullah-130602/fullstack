const express = require("express");
const { Category, Schema } = require("../Models/CategoryModel");

const routes = express.Router();

// Get
routes.get("/", async (req, res) => {
  try {
    const getAllCategories = await Category?.find();
    res.status(200).send({ status: 200, categories: getAllCategories });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// Create
routes.post("/", async (req, res) => {
  const getAllCategories = await Category?.findOne({ name: req.body.name });

  if (getAllCategories) {
    res.status(409).send({
      status: 409,
      message: `${req.body.name} already exists`,
    });
  } else {
    try {
      await Schema.validateAsync(req.body);
      const newCategory = new Category({
        name: req.body.name,
      });
      await newCategory.save();
      res.status(200).send({
        status: 200,
        message: "Category created successfully",
      });
    } catch (error) {
      let message = error?.details[0]?.message?.replace(/\"/g, "");
      res.status(404).send({
        status: 400,
        message: message,
      });
    }
  }
});

routes.put("/:id", async (req, res) => {
  try {
    await Schema.validateAsync(req.body);
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      { new: true }
    );
    if (!updatedCategory) {
      res.status(404).send({ status: 404, message: "Category not found" });
    }
    res.status(200).send({
      status: 200,
      message: "Category updated",
    });
  } catch (error) {
    let message = error.details
      ? error.details[0]?.message?.replace(/\"g/, "")
      : error;
    res.status(400).send({
      status: 400,
      message: message,
    });
  }
});

module.exports = routes;
