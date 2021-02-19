const express = require('express')
const router = express.Router()
const User = require("../models").User;
const passport = require('../utils/passport');

// Find User
router.get('/user',
    
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
        const user = JSON.parse(JSON.stringify(req.user));
        const cleanUser = Object.assign({}, user);
        const secureUserData = {
            local: {
                username: cleanUser.local.username?? cleanUser.local.username,
                email: cleanUser.email ?? "",
            },
            email: cleanUser.email ?? "",
            key: cleanUser.key ?? "WOOD",
            verified: cleanUser.verified ?? false
        };

        res.json({ user: secureUserData })
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