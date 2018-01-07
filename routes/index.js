var express = require('express');
var router = express.Router();




module.exports = function (passport) {

    // route for home page
    router.get('/', function (req, res) {
        res.send('this is an api for driver app');
    });

    // route for login form
    // route for processing the login form
    // route for signup form
    // route for processing the signup form

    // route for showing the profile page
    router.get('/profile',isAuthenticated,  function (req, res) {
        res.send(req.user);
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    router.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['public_profile', 'email'],
        session: false
    }));

    // handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }),
        function(req, res) {
            console.log(req)
            res.json({ id: req.user.id, username: req.user.name, picture: req.user.picture });
        });

    // route for logging out
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    return router

};

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}
