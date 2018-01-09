var driver = require('./driver/driver');
var User = require('./models/user');

var dummyData = {
    addDummyUser: function (name, picture, done) {
        var newUser = new User();

        newUser.id = "1"
        newUser.token = "dummyToken"
        newUser.name = name
        newUser.email = "dummyEmail"
        newUser.picture = picture;


        // save our user to the database
        newUser.save(function (err) {
            if (err) {
                return done(err);
            }

            // if successful, return the new user
            return done(null, newUser);
        });
    },
    addDummyDrive: function (userId, from, to, done) {
        var data = {
            body: {
                start: from,
                end: to,
                agreed: "true",
                status: "active",
                owner: userId,
                date: "12.12.2018",
                seats: 4,
                users: [userId]
            }
        }
        driver.addDrive(data, function (err, drive) {
            done(err, drive)
        })
    },
    subscribeDummy: function (driveId, userId, done) {
        var data = {
            body: {
                driveId: driveId,
                userId: userId
            }
        }
        driver.subscribe(data, function (err, drive) {
            done(err, drive)
        })
    }
}
module.exports = dummyData