var db = require("../models");
// var tableName = require("../public/js/data/tableName");

module.exports = function(app) {
  // Get all examples
  app.get("/RedPill/all", function(req, res) {
    db.Place.findAll({}).then(function(dbExamples) {
      res.render("info", {
        msg: "Welcome!",
        Places: dbExamples
      });
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/RedPill/new", function(req, res) {
    db.Place.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
