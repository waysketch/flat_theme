const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;
const passport = require('../utils/passport');

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

// ================ //
// === CREATE USER ================================= //
// === NOTE: logged in user must have a gold key === //
// ================================================= //
router.route('/')
    .post(authenticateUser, (req, res) => {
        const { username, password, email, firstName, lastName, key } = req.body;

        if (req.user.key !== "GOLD") {
            return res.status(401).json({ message: "You do not have sufficient privileges to add a user" });
        };

        db.User.create({ local: { username, password }, firstName, lastName, key, email }).then(userRes => {
            if (!userRes) return res.status(400).json({ message: "User not successfully created" });
            res.json({
                message: "User successfully created",
                username: userRes.local.username,
                key: userRes.key
            });
        }).catch(err => {
            res.status(500).json(err)
        })
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