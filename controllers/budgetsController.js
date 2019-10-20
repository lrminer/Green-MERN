const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Budget.find(req.query)
      .then(dbBudgets => res.json(dbBudgets))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  findById: function(req, res) {
    db.Budget.find(req.params.id)
      .then(dbBudget => res.json(dbBudget))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  create: function(req, res) {
    // const budget = req.body;
    // const parsedBudget = {};
    // for (let property in budget) {
    //   parsedBudget[property] = parseInt(budget.property);
    // }
    // console.log(parsedBudget);
    db.Budget.create(req.body)
      .then(dbBudget => res.json(dbBudget))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  update: function(req, res) {
    db.Budget.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBudget => res.json(dbBudget))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  },
  remove: function(req, res) {
    db.Budget.findById({ _id: req.params.id })
      .then(dbBudget => dbBudget.remove())
      .then(dbBudget => res.json(dbBudget))
      .catch(err => res.status(422).json(err)); // unprocessable entity (WebDAV)
  }
};
