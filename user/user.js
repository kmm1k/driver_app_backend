var User = require('../models/user');
var user = {
    getAllUsers: function (done) {
        User.find({}, function (err, drives) {
            done(drives)
        })
    }
}

module.exports = user