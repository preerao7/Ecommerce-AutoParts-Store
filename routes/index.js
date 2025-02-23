var express = require('express');
var jwt = require('jsonwebtoken');
var app = express.Router();
var passport = require('passport');
var Account = require('../models/account');

app.get('/', function (req, res) {
res.render('index', { user : req.user });
});



app.get('/register', function(req, res) {
res.render('register', {});
});

app.post('/register', function(req, res) {
Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
          return res.render('register', { account : account });
      }

passport.authenticate('local')(req, res, function () {
res.redirect('/');
      });
  });
});

app.get('/login', function(req, res) {
res.render('login');
});

app.get('/sshop', function(req, res) {
  res.render('sshop');  
});

app.post('/login', passport.authenticate('local'), function(req, res) {
res.redirect('/sshop');
});



app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
})

app.get('/logout', function(req, res) {
req.logout();
res.redirect('/');
});



module.exports = app;
