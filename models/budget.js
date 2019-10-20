const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  // budget schema here
  grocery: Number,
  dineout: Number,
  alcohol: Number,
  housing: Number,
  apparel: Number,
  transportation: Number,
  healthcare: Number,
  entertainment: Number,
  personalcare: Number,
  education: Number,
  miscellaneous: Number,
  donations: Number,
  insurance: Number
});

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
