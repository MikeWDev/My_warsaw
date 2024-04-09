const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  allergens: [String],
  ingridients: [String],
  mealPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Meal", mealSchema);
