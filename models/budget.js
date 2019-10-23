const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected in the model")
});

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
