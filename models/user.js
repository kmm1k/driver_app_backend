var mongoose = require('mongoose'), Schema = mongoose.Schema;

var User = Schema({
    id          : String,
    token       : String,
    email       : String,
    name        : String,
    picture     : String
});
module.exports = mongoose.model('User', User);