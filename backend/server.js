const express = require("express");
const mongoose = require("mongoose");
const mealRoutes = require("./routes/meals");
require("dotenv").config();
const cors = require("cors");
//express app
const app = express();
app.use(express.json());
app.use(cors());
//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server started!");
    });
    console.log("Succesfully connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method + " kurwaaa");
  next();
});

//routes
app.use("/our-menu", mealRoutes);
