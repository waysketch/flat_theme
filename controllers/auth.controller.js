const express = require('express')
const router = express.Router()
const User = require("../models").User;
const passport = require('../utils/passport');

// Find User
router.get('/user',
    (req, res, next) => {
        if (req.user) {
            return res.json({ user: req.user })
            // console.log(req.body)
        } else {
            return res.json({ user: null })
        }
    }
);

// Login
router.post('/login',
    ( req , res , next) => {
        const { username } = req.body;
        User
        .findOne({ email : username })
        .then( theUser => {
            if ( theUser.verified !== true ){
                // TODO resend verification email here
                res.send("User is not verified");
                return;
            } else {
                next();
            };
        });
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('keep going');
        const user = JSON.parse(JSON.stringify(req.user));
        const cleanUser = Object.assign({}, user);
        if (cleanUser.local) {
            delete cleanUser.local.password
        };
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