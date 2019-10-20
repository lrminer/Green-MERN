const db = require("../models");

module.exports = {
  login: function(req, res) {
    db.User.find(req.query)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  }
};
