const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017");

app.get("/getbooks", (req, res) => {
  UserModel.fetch({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const booked = req.body;
  const newUser = new UserModel(booked);
  await newUser.save();

  res.json(booked);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});