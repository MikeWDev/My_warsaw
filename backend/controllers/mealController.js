const { default: mongoose } = require("mongoose");
//models
const Meal = require("../models/MealModel");

//Getting all meals

const getMeals = async (req, res) => {
  const zapiekanka = await Meal.find({});
  res.status(200).json(zapiekanka);
};

module.exports = {
  getMeals,
};
