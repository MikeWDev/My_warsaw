const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zapiekankaSchema = new Schema({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  allergens: {
    type: String,
    required: true,
  },

  ingridients: {
    type: String,
    required: true,
  },

  mealPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Zapiekanka", zapiekankaSchema);
