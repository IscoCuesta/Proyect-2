var db = require("../models");
// var tableName = require("../public/js/data/tableName");

module.exports = function(app) {
  // Get all examples
  app.get("/api/places", function(req, res) {
    db.Places.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // Create a new example
  app.post("/api/places", function(req, res) {
    db.Places.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id
  app.delete("/api/places/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
