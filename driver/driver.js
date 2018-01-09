var Drive = require('../models/drive');
var drive = {
    getAllDrives: function (done) {
        Drive.find({}, function (err, drives) {
            done(drives)
        })
    },
    addDrive: function (data, done) {
        var newDrive = new Drive();
        console.log(data)
        newDrive.start = data.body.start
        newDrive.end = data.body.end
        newDrive.agreed = data.body.agreed
        newDrive.status = data.body.status
        newDrive.owner = data.body.owner
        newDrive.date = data.body.date
        newDrive.users = data.body.users
        newDrive.seats = data.body.seats
        // save our user to the database
        newDrive.save(function (err) {
            if (err) {
                return done(err);
            }

            // if successful, return the new user
            return done(null, newDrive);
        });
    },
    deleteDrive: function(req, done) {
        Drive.findOne({_id: req.body._id}, function(err, drive){
            drive.status = "archived"
            drive.save(function (err) {
                if (err) {
                    return done(err);
                }

                // if successful, return the new user
                return done(null, drive);
            });
        });
    },
    subscribe: function() {

    },
    unsubscribe: function() {

    }
}

module.exports = drive