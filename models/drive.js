var mongoose = require('mongoose'), Schema = mongoose.Schema;
SerieSchema = require('../models/user');

var DriveSchema = Schema({
    start       : String,
    end         : String,
    agreed      : String,
    status      : String,
    owner       : String,
    users       : [{ type: Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Drive', DriveSchema);