const express = require("express");
const mongoose = require("mongoose");
const mealRoutes = require("./routes/meals");
require("dotenv").config();

//express app
const app = express();
app.use(express.json());
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
