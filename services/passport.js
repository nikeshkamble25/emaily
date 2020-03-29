const passport = require('passport');
const googlestatergy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((existingUser) => {
            done(null, existingUser);
        });
});

passport.use(new googlestatergy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
},
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
            done(null, existingUser);
            return;
        }
        const newUser = await new User({
            googleId: profile.id,
            displayName: profile.displayName,
            displayPicture: profile.photos[0].value,
            email: profile.emails[0].value
        }).save();
        done(null, newUser);
    }
));
