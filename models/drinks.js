const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true },
  brewer: { type: String, required: false },
  ingredients: String,
  date: { type: Date, default: Date.now }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
