const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
  },
  timePlaced: {
    type: String,
  },
  basketContent: [
    {
      itemName: String,
      itemPrice: Number,
      itemQty: Number,
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
