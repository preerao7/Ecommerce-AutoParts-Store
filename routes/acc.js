var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/vidzy');

var collection = db.get('accounts');


// api/videos
// router.get('/', function(req, res, next) {

//   collection.find({}, function(err, userna){
//       if (err) throw err;
//       res.json(userna);
//   });
  
// });

router.get('/', function (req, res) {
res.render('', { user : req.user });
});



module.exports = router;
