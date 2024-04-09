const mongoose = require("mongoose");

const Order = require("../Models/OrderModel");

//Post a order
const postOrder = async (req, res) => {
  let orders = await Order.find({});

  if (orders.length > 0) {
    let id;
    let last_order_array = orders.slice(-1);
    let last_order = last_order_array[0];
    id = last_order + 1;
  } else {
    id = 1;
  }
  const { basket, orderDetails } = req.body;
  try {
    const order = await Order.create({ basket, orderDetails });
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Get all orders
const getOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(200).json(workouts);
};

module.exports = { postOrder, getOrders };
