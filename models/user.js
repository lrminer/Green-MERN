const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // user schema here
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
