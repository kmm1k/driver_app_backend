var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dummyData = require('./dummydata');
mongoose.connect('mongodb://localhost/test',function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase();
    dummyData.addDummyUser("RMS Kull", 'static/list/bmw.jpg', function(err, newUser) {
        if(err)
            console.log(err)
        console.log(newUser)
        dummyData.addDummyDrive(newUser._id, "Kuperjanovi JVP", "Tartu", function(err, drive) {
            if(err)
                console.log(err)
            console.log(drive)
        })
    })
    dummyData.addDummyUser("N-SRS Rammu", 'static/list/audo.jpg', function(err, newUser) {
        if(err)
            console.log(err)
        console.log(newUser)
        dummyData.addDummyDrive(newUser._id, "Viru JVP", "Tallinn", function(err, drive) {
            if(err)
                console.log(err)
            console.log(drive)
        })
    })
    dummyData.addDummyUser("N-SRS Alas", 'static/list/lex.jpg', function(err, newUser) {
        if(err)
            console.log(err)
        console.log(newUser)
        dummyData.addDummyDrive(newUser._id, "Vahipataljon", "Hiiumaa", function(err, drive) {
            if(err)
                console.log(err)
            console.log(drive)
        })
    })
});

var app = express();

var passport = require('passport');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(passport.initialize());

var index = require('./routes/index')(passport);
app.use("/", index)


var initPassport = require('./config/passport');
initPassport(passport);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



module.exports = app;