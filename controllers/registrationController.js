// might need to include the dotenv package for access to secret but we will see
require("dotenv").config();
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegistration = require("../validation/register-validation");

module.exports = {
  register: function(req, res) {
    const { errors, isValid } = validateRegistration(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    db.User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email is already taken" });
      } else {
        const newUser = new db.User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        // Hash pw
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;

            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
};
