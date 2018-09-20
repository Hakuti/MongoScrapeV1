const db = require("../models");

module.exports = {
  findUnsaved: function(req, res) {
    console.log("Route Hit");
    db.Article.find({ saved: false })
      .sort({ date: -1 })
      .then(results => {
        console.log("Route hit");
        res.json(results);
      })
      .catch(err => res.status(422).json(err));
  },

  deleteAll: function(req, res) {
    db.Article.find()
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch((err = res.status(422).json(err)));
  },

  //   findById: function(req, res) {
  //     db.Article
  //       .findById(req.params.id)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   create: function(req, res) {
  //     db.Article
  //       .create(req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  update: function(req, res) {
    db.Article.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).then(results => {
      res.json(results);
    });
  }
  //   remove: function(req, res) {
  //     db.Article
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
