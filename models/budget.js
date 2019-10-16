const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  // budget schema here

});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
