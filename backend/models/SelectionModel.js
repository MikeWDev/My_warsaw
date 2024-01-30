const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const selectionSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Selection", selectionSchema);
