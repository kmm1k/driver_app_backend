var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var app = express();

var passport = require('passport');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(passport.initialize());

var index = require('./routes/index')(passport);
app.use("/", index)


var initPassport = require('./config/passport');
initPassport(passport);
app.use(function (err, req, res, next) {
    console.log(err);
});

module.exports = app;