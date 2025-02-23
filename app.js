var createError = require('http-errors');
var express = require('express');
var jwt = require('jsonwebtoken');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videosRouter = require('./routes/videos');
var accRouter = require('./routes/acc');
var cartRouter = require('./routes/carrrt');



var app = express();
app.use(session({ secret: 'this-is-a-secret-token' }));
app.use(passport.initialize());
app.use(passport.session());


// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost:27017/vidzy');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/videos', videosRouter);
app.use('/api/account', accRouter);
app.use('/api/cart', cartRouter)



app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
