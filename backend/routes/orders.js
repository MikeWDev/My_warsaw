const express = require("express");
const router = express.Router();
const { postOrder, getOrders } = require("../controllers/orderController");

//Get all orders
router.get("/", getOrders);
//Post order
router.post("/", postOrder);

module.exports = router;
