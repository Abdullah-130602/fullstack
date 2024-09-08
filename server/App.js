const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/User");
const categoryRoutes = require("./Routes/Category");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost/first_full_stack")
  .then(() => console.log("Connection to monogodb successful"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening on port " + port));
