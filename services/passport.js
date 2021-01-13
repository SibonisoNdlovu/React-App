
const passport = require('passport');
const googleStartegy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

//fetch somehting out of mongoose
const User = mongoose.model('users');

//store userid in a cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
})

//get token in cookie
passport.deserializeUser((id, done) => {
    User.findById(id).then( user => {
        if(user){
            done(null, user);
        }
    });
})

// console.developers.google.com
passport.use(
    new googleStartegy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL:'/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) =>{
        User.findOne({googleId: profile.id}) //check if user exists
            .then((existingUser)=>{
                if(existingUser){
                    // we already have a user with the profile ID
                    done(null, existingUser); // send user details to passport
                } else {
                    // make a new record ~~~ model instance
                    new User ({ googleId: profile.id }) 
                    .save()
                    .then(user => done(null, user)); // another instance here
                }
        })
    })
);