var db = require("../models");
var axios = require('axios');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home")
  });

  // Load maps 
  app.get("/maps", function(req, res) {
    var random = [];
    for (var i = 0; i<5; i++ ){
      var IdRand = Math.floor(Math.random()*20)+1;
      if(!random.includes(IdRand)){
        random.push(IdRand);
      }else{i--}
    }
      
      db.Places.findAll({
        where: {
          id: {
            [Op.or]: random
          }
        },
        include: [{
          model: db.Dishes
        }]
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

    var searchType = {};
    if (req.params.type !== undefined && req.params.type !== "null"){
      var searchType =  {where: { type: req.params.type },
      include: [{
        model: db.Dishes
      }]} ;
    }else{
      var searchType = {
        include: [{
          model: db.Dishes
        }]};
    }
    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+searchPlace+".json?proximity=-99.1228881,19.426?address="+searchPlace+"&access_token="+APIKEY;

    axios.get(queryURL).then(function(response) {
      var searchLat = response.data.features[0].center[1];
      var searchLon = response.data.features[0].center[0];
      console.log(searchType);
      db.Places.findAll(searchType).then(function(dbExample) {
        var arrByDist = [];

        for(var i =0; i<dbExample.length; i++){
          var dist = Math.sqrt((Math.pow((searchLon-dbExample[i].lon),2))+(Math.pow((searchLat-dbExample[i].lat),2)));
          arrByDist[i] = {
            dist: dist,
            place: dbExample[i]
          };
        };
        
        function compare( a, b ) {
          if ( a.dist < b.dist ){
            return -1;
          }
          if ( a.dist > b.dist ){
            return 1;
          }
          return 0;
        }
        
        arrByDist.sort( compare );

        var responseArr = [];


        for(var i =0; i<arrByDist.length; i++){
          responseArr[i] = arrByDist[i].place;
        };
        res.render("place", {
          places: responseArr,
          lon: searchLon,
          lat: searchLat,
          zoom: 15,
          ubicacion: searchPlace
        });


      })

    });

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
