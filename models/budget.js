const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  // budget schema here
  grocery: { type: Number, required: true },
  dineout: { type: Number, required: true },
  alcohol: { type: Number, required: true },
  housing: { type: Number, required: true },
  apparel: { type: Number, required: true },
  transportation: { type: Number, required: true },
  healthcare: { type: Number, required: true },
  entertainment: { type: Number, required: true },
  personalcare: { type: Number, required: true },
  education: { type: Number, required: true },
  miscellaneous: { type: Number, required: true },
  donations: { type: Number, required: true },
  insurance: { type: Number, required: true }
});

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
