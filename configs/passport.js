const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
    passport.use(new LocalStrategy(function (username, password, done) {
   
      // User Login
        User.findOne({
            where: {
                username: username
            }
        }).then(user => {
            if (!user) {
                return done(null, false, {
                    message: "Username not found!"
                });
            }

            bcrypt.compare(password, user.get('password'), function (err, isMatch) {
                if (err) throw err;

                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {
                        message: "Wrong password!"
                    });
                }
            })
        })  
  }));

  passport.serializeUser(function (user, done) {
      done(null, user.get('id'));
  });

  passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(user => {
        done(null, user);
    });
  });
}