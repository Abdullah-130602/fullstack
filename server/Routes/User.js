const express = require("express");
const { Users, schema } = require("../Models/UserModel");
const bcrypt = require("bcryptjs");

const routes = express.Router();

// Get All Users
routes.get("/", async (req, res) => {
  let allUsers = await Users.find();
  res.send(allUsers);
});

// Get Student by Id
routes.get("/:id", async (req, res) => {
  try {
    getUser = await Users?.findById(req.params.id);
    if (!getUser)
      res.status(404).send({
        status: 404,
        message: "User not found",
      });
    await res.status(200).send({
      status: 200,
      user: getUser,
    });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// Create User
routes.post("/", async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    let user = new Users({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      is_Remember: req.body.is_Remember,
    });
    await user.save();
    res.status(201).send({
      status: 200,
      message: "User registered successfully",
    });
  } catch (error) {
    let message = error.details[0]?.message?.replace(/\"/g, "");
    console.log(error);
    // console.log(error.details[0]?.context);

    res.status(400).send({
      status: 400,
      message:
        error.details[0].context?.limit &&
        error.details[0].context?.label === "password"
          ? "Password should be 6 characters long"
          : error.details[0].context.regex
          ? "Password should be alphanumeric only"
          : error.details[0].context?.lable === "phone" &&
            error.details[0].context?.limit
          ? "Phone number should be 10 digits only"
          : message,
    });
  }
});

// Update User
routes.put("/:id", async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    const getUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        is_Remember: req.body.is_remember,
      },
      { new: true }
    );

    if (!getUser)
      res.status(404).send({
        status: 404,
        message: "User not found",
      });

    res.status(200).send({
      status: 200,
      message: "User updated successfully",
    });
  } catch (err) {
    console.log(err);

    let message = err?.details
      ? err?.details[0]?.message?.replace(/\"/g, "")
      : err;
    console.log(err);
    // console.log(error.details[0]?.context);

    res.status(400).send({
      status: 400,
      message:
        err.details[0].context?.limit &&
        err.details[0].context?.label === "password"
          ? "Password should be 6 characters long"
          : err.details[0].context.regex
          ? "Password should be alphanumeric only"
          : err.details[0].context?.lable === "phone" &&
            err.details[0].context?.limit
          ? "Phone number should be 10 digits only"
          : message,
    });
  }
});

// Delete User
routes.delete("/:id", async (req, res) => {
  try {
    await Users?.findByIdAndDelete(req.params.id);
    res.status(200).send({
      status: 200,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(400).send("Error deleting user");
  }
});

module.exports = routes;
