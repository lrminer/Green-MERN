const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  findById: function(req, res) {
    db.User.find(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  }
};
