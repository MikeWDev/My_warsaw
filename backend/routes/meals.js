const express = require("express");
const router = express.Router();

const {
  getZapiekankas,
  getPolishDumplings,
  getSelection,
} = require("../controllers/mealController");

router.get("/zapiekankas", getZapiekankas);

router.get("/polish-dumplings", getPolishDumplings);

router.get("/selection-menu", getSelection);

module.exports = router;
