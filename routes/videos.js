var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/vidzy');

var collection = db.get('items');
var collection1 = db.get('cart');
var collection2 = db.get('account');
var collection3 = db.get('carthistory');



// api/videos
router.get('/', function(req, res, next) {

  collection.find({}, function(err, videos){
      if (err) throw err;
      res.json(videos);

  });

  
});
router.get('/', function(req, res, next) {

collection1.find({}, function(err, carts){
      if (err) throw err;
      res.json(carts);
      
  });
});
router.get('/cart', function(req, res, next) {

  collection3.find({}, function(err, videos){
      if (err) throw err;
      res.json(videos);

  });

  
});
//api/videos/id
router.get('/:id', function(req, res, next) {
  //res.render('ssshop', { user : req.user });

  collection.findOne({_id : req.params.id }, function(err, video){
      if (err) throw err;
  //     collection1.insert({
  //   title: video.title,
  //  price: video.price,
  //  image: video.image



  // });
      res.render('sshop', 
        { 
          id: video._id,
          title: video.title,
          price: video.price,
          category: video.category,
          image: video.image
      });
  });
  
});

router.post('/:id/cartinsert', function(req, res, next) {
  //res.render('ssshop', { user : req.user });


  collection.findOne({_id : req.params.id }, function(err, video){
      if (err) throw err;
      collection1.insert({
    title: video.title,
   price: video.price,
   image: video.image,
   delete: "not deleted",
   quantity: req.body.dropdown
});
          collection3.insert({
    title: video.title,
   price: video.price,
   image: video.image,
   quantity: req.body.dropdown
});

      // res.render('sshop', 
      //   { 
      //     id: video._id,
      //     title: video.title,
      //     price: video.price,
      //     category: video.category,
      //     image: video.image
      // });
  });
  
});






router.get('/new', function(req, res) {
  res.render('new',{});
});


router.post('/', function(req, res) {

  collection.insert({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    delete: "not deleted"



  }, function(err, video){
      if (err) throw err;
      res.redirect('/adminshop.html');
  });
  
});

router.post('/', function(req, res) {

  collection.insert({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    delete: "not deleted"



  }, function(err, video){
      if (err) throw err;
      res.redirect('/adminshop.html');
  });
  
});



router.get('/:id/edit',function(req,res){
    collection.findOne({_id:req.params.id},function(err,video)
    {
        if(err) throw err;
        res.render('edit',{video : video});
    });

});

router.post('/:id/update', function(req, res){
    collection.findOneAndUpdate({_id:req.params.id},{$set:{
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image
    }}, function(err, video){
        if (err) throw err;
        res.redirect('/adminshop.html');      
    });
});

router.get('/:id/edit1',function(req,res){
    collection.findOne({_id:req.params.id},function(err,video)
    {
        if(err) throw err;
        res.render('edit1',{video : video});
    });

});

router.post('/:id/update/delete', function(req, res){
    collection.findOneAndUpdate({_id:req.params.id},{$set:{
        delete: "deleted"
    }}, function(err, video){
        if (err) throw err;
        res.redirect('/adminshop.html');      
    });
});

router.get('/:id/edit2',function(req,res){
    collection.findOne({_id:req.params.id},function(err,video)
    {
        if(err) throw err;
        res.render('edit2',{video : video});
    });

});

router.post('/:id/update/redelete', function(req, res){
    collection.findOneAndUpdate({_id:req.params.id},{$set:{
        delete: "not deleted"
    }}, function(err, video){
        if (err) throw err;
        res.redirect('/adminshop.html');      
    });
});

router.get('/:id/deleinsert', function(req, res){
    collection1.findOneAndUpdate({_id:req.params.id},{$set:{
        delete: "deleted"
    }}, function(err, video){
        if (err) throw err;
        res.redirect('/cart.html');      
    });
});

router.put('/:id', function(req, res) {

  collection.update({_id : req.params.id },
    { $set: {
    title: req.body.title,
    price: req.body.price,




  }}, function(err, video){
      if (err) throw err;
      res.json(video);
  });
  
});


router.delete('/:id/delete', function(req, res) {

  collection.remove({_id : req.params.id },
   function(err, video){
      if (err) throw err;
  });

  
});


module.exports = router;
