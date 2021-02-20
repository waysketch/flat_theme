const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;
const passport = require('../utils/passport');
const EmailAPI = require("../utils/middleware/nodemailer");

// ================ //
// === GET USER === //
// ================ //
router.route('/')
    .get(authenticateUser, (req, res) => {
        db.User.find({}, { "local.password": 0 }).sort({ email }).then(dbRes => {
            res.json(dbRes);
        }).catch(err => {
            res.status(500).json(err);
        });
    });

// ================== //
// === SETUP PAGE ============================================= //
// === Checks to see if there are ANY gold key users at all === //
// ============================================================ //
router.route('/goldkey')
.get(( _ , res) => {
    db.User
    .find({ key: "GOLD" })
    .then( _ => {
        if ( _.length === 0 ){
            res.json({ areThereUsers: "false" });
        } else {
            res.json({ areThereUsers: "true" });
        }
    })
    .catch( err => {
        res.send("Something went wrong");
    });
})

// =================== //
// === CREATE USER === //
// =================== //
router.route('/')
    .post((req, res) => {
        console.log('test');
        const { password, email } = req.body;

        console.log(`Creating user for ${email}`);

        let key = "COPPER";
        const users = db.User.find({});
        const temp_token = `${email[0]}${Date.now()}`;

        users.then( _ => {
            if ( _.length === 0 ) { key = "GOLD" }; // first user in database has a GOLD key.
        })
        .then( _ => {
            db.User.create({ local: { username: email, password, email }, email, temp_token, key, role: "admin"}).then(userRes => {
                if (!userRes) return res.status(400).json({ message: "User not created" });
    
                // SEND VERIFICATION EMAIL
                EmailAPI.sendVerificationEmail(email, temp_token)
                .then( _ => {
                    res.json({
                        message: "User successfully created, please check for verification email before you can use your account.",
                        username: userRes.local.username
                    });
                })
                .catch( _ => {
                    res.status(500).send("Oops! Somethings gone wrong.");
                });
            }).catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
        })
        .catch( err => {
            console.log(err);
            res.status(500).send("Unable to create user");
        });
    });

// ================ //
// === DELETE USER ========================================================================= //
// === NOTE: delete user from database if user sending request is a user with a gold key === //
// ========================================================================================= //
router.route('/:id')
    .delete(authenticateUser, (req, res) => {
        const { id } = req.params;
        const { key } = req.user

        if (key !== "GOLD") {
            return res.status(403).json({
                message: "Insufficient privileges do delete user",
                userId: id
            })
        };

        db.User.findByIdAndDelete(id).then(_ => {
            res.json({
                message: "User removed from our lives forever.",
                userId: id
            });
        }).catch(err => {
            res.status(500).json({ err: err, msg: "Our dev did something wrong. We'll talk to him." });
        })
    });

// =================== //
// === RESET PASSWORD =========================================== //
// === NOTE: update password for the currently logged in user === //
// ============================================================== //
router.route('/:id/password')
    .put(authenticateUser, (req, res) => {
        const id = req.params.id;
        const { newPassword } = req.body;

        db.User.findById(id).then(userRes => {
            if (!userRes) return res.status(404).json({ msg: "User not found." });

            if ((req.user.local.username !== userRes.local.username) && (req.user.key !== 'GOLD')) {
                return res.status(401).json({
                    msg: "You don't have sufficient privileges to change the password for another user.",
                    yourUserId: req.user.local.username,
                    theirUserId: id
                });
            };

            db.User.findByIdAndUpdate(id, { $set: { "local.password": newPassword } }).then(updateRes => {
                updateRes.local.password = newPassword;
                updateRes.save();  //save it to trigger the password hashing
                res.json({ msg: "Password successfully changed", user: req.user.local.username });
            }).catch(err => {
                res.status(500).json(err);
            });

        }).catch(error => {
            res.json({ err: error });
        });
    });

module.exports = router;