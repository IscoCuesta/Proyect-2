var db = require("../models");
const keys = require("../keys");
var axios = require('axios');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Places.findAll({}).then(function(dbExamples) {
      res.render("info", {
        places: dbExamples
      });
    });
  });
  // Load maps 
  app.get("/maps", function(req, res) {
    var random = [];
    for (var i = 0; i<5; i++ ){
      var IdRand = Math.floor(Math.random()*20);
      random.push(IdRand);
    };
    db.Places.findAll({
      where: {
        id: {
          [Op.or]: random
        }
      }
    }).then(function(dbExamples) {
      res.render("index", {
        places: dbExamples,
        lon: 19.426,
        lat: -99.1228881,
        zoom: 12
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/maps/:place/:type?", function(req, res) {
    var APIKEY = process.env.mapbox_id;
    var searchPlace = req.params.place;
    console.log(req.params);
    if (req.params.type !== null){
      var searchType =  {where: { type: req.params.type }} ;
    }else{
      var searchType = {};
    }
    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+searchPlace+".json?proximity=-99.1228881,19.426?address="+searchPlace+"&access_token="+APIKEY;
    console.log("querry ajax",queryURL);
    axios.get(queryURL).then(function(response) {

      db.Places.findAll(searchType).then(function(dbExample) {





        res.render("index", {
          places: dbExample,
          lon: {coord: response.data.features[0].center[0]},
          lat: {coord: response.data.features[0].center[1]}
        });
      });
        console.log(response.data);
        res.json(response.data.features[0].center);


  

    });

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
