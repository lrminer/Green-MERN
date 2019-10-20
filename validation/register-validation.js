const validator = require("validator");
const isEmpty = require("is-empty");

const validateRegistration = data => {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.username)) {
    errors.username = "Please enter a username.";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Please enter an email.";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "That is not a valid email.";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Please enter a password.";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateRegistration;
