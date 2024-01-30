const express = require("express");
const router = express.Router();

const {
  getZapiekankas,
  getPolishDumplings,
} = require("../controllers/mealController");

router.get("/zapiekankas", getZapiekankas);

router.get("/polish-dumplings", getPolishDumplings);

module.exports = router;
