var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/vidzy');

var collection = db.get('videos');
var collection1 = db.get('cart');
var collection2 = db.get('account');



router.get('/', function(req, res, next) {

collection1.find({}, function(err, carts){
      if (err) throw err;
      res.json(carts);
      
  });
});




module.exports = router;
