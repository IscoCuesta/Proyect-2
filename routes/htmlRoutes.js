var db = require("../models");
const keys = require("../keys");
var axios = require('axios');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Places.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Load maps 
  app.get("/maps", function(req, res) {
    var random = [];
    for (var i = 0; i<4; i++ ){
      var IdRand = Math.floor(Math.random()*20);
      random.push(IdRand);
    }
    db.Places.findAll({
      where: {
        id: {
          [Op.and]: random
        }
      }
    }).then(function(dbExamples) {

      res.render("index", {
        msg: "Welcome!",
        Places: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/maps/:place/:type?", function(req, res) {
    var APIKEY = process.env.mapbox_id;
    // var APIKEY = "pk.eyJ1IjoiaXNjb2N1ZXN0YSIsImEiOiJjanV4Y245YmwwbHJiM3lsNmhyeHc1MmV2In0.BsdcljLRiFE9seVq7JuZrQ";
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

        // db.Example.findAll({}).then(function(dbExample) {
        //   res.render("example", {
        //     example: dbExample
        //   });
        // });
        console.log(response.data);
        res.json(response.data.features[0].center);


  

    });

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
