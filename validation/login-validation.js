const validator = require("validator");
const isEmpty = require("is-empty");

const validateLogin = data => {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.username)) {
    errors.username = "Please enter a username.";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Please enter a password.";
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateLogin;
