const { default: mongoose } = require("mongoose");
//models
const Zapiekanka = require("../models/ZapiekankaModel");
const PolishDumplings = require("../models/PolishDumplingsModel");

//Getting all meals
//get all zapiekankas
const getZapiekankas = async (req, res) => {
  const zapiekanka = await Zapiekanka.find({});
  res.status(200).json(zapiekanka);
};
// get all pierogis
const getPolishDumplings = async (req, res) => {
  const polishDumplings = await PolishDumplings.find({});
  res.status(200).json(polishDumplings);
};

module.exports = {
  getZapiekankas,
  getPolishDumplings,
};
