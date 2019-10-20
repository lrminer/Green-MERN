const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  // budget schema here
  Grocery: {
    type: Number
  },
  Dine_Out: {
    type: Number
  },
  Alcohol: {
    type: Number
  },
  Housing: {
    type: Number
  },
  Apparel: {
    type: Number
  },
  Transportation: {
    type: Number
  },
  Health_care: {
    type: Number
  },
  entertainment: {
    type: Number
  },
  Personal_care: {
    type: Number
  },
  Education: {
    type: Number
  },
  Miscallaneous: {
    type: Number
  },
  Donations: {
    type: Number
  },
  Insurance: {
    type: Number
  }

});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
