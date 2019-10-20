// might need to include the dotenv package for access to secret but we will see
require("dotenv").config();
const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRETKEY;

const validateLogin = require("../validation/login-validation");

module.exports = {
  login: function(req, res) {
    const { errors, isValid } = validateLogin(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    db.User.findOne({ username }).then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ userNotFound: "Username does not exist" });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            username: user.username
          };
          jwt.sign(payload, secret, { expiresIn: "1d" }, (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          });
        } else {
          return res
            .status(400)
            .json({ passwordIncorrect: "Incorrect password" });
        }
      });
    });
    db.User.findOne(req.query)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  }
};
