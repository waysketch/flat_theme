const express = require('express')
const router = express.Router()
const User = require("../models").User;
const passport = require('../utils/passport');

// Google Auth
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile']
    })
)

// Google Redirect
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)

router.get('/user',
    (req, res) => {
        if (req.user) {
            
            // TODO: whitelist required. Right now its blacklisting password but this is way too much data to hand the user.
            const user = req.user;

            if (user.local.password) {
                user.local = {
                    username: user.local.username
                };
                console.log(user.local);
            };

            return res.json({ user: user })
        } else {
            return res.json({ user: null })
        }
    }
)

// Login
router.post('/login',
    (req, res, next) => {
        next();
        // const { username } = req.body;
        // User
        // .findOne({ email : username })
        // .then( theUser => {
        //     if ( theUser.verified !== true ){
        //         // TODO resend verification email here
        //         console.log('[LOGIN][WARN] User is not verified.');
        //         res.send("User is not verified");
        //         return;
        //     } else {
        //         console.log('[LOGIN]next();');
        //         next();
        //     };
        // });
    },
    passport.authenticate('local'),
    (req, res) => {
        const user = JSON.parse(JSON.stringify(req.user));
        const cleanUser = Object.assign({}, user);

        if (cleanUser.local) {
            delete cleanUser.local.password
        };

        console.log(cleanUser);
        res.json({ user: cleanUser })
    }
);

// Logout
router.post('/logout',
    (req, res) => {
        if (req.user) {
            req.session.destroy()
            res.clearCookie('connect.sid')
            return res.json({ msg: `You have signed out of ${req.user}` })
        } else {
            return res.json({ msg: 'Unable to log out.' })
        }
    }
);

module.exports = router