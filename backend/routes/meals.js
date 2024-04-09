const express = require("express");
const router = express.Router();

const { getZapiekankas } = require("../controllers/mealController");

router.get("/zapiekankas", getZapiekankas);

module.exports = router;
