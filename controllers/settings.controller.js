const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;
const _db = require("../models").Settings;

// ================ //
// === Read All === //
// ================ //
router.route("/").get((_, res) => {
    _db
    .findOne({ mod: "Settings" })
    .then(dbModel => {
        const cleanedData = {
            darkMode: dbModel.darkMode,
            gtm: dbModel.gtm,
            uaid: dbModel.uaid,
            primaryUser: dbModel.primaryUser
        };

        res.json(cleanedData);
    })
    .catch(error => {
        console.log(error);
        res.json({
            msg: "Oops! Something has gone wrong."
        })
    });
});

// ======================== //
// === FIRST TIME SETUP === //
// ======================== //
router.route("/setup").post((req, res) => {

    const settings = {
        darkMode: req.body.darkMode ? req.body.darkMode : true,
        gtm: req.body.gtm ? req.body.gtm : null,
        uaid: req.body.uaid ? req.body.uaid : null,
        primaryUser: req.body.primaryUser ? req.body.primaryUser : ""
    };

    _db
    .find({ mod: "Settings" })
    .then(dbModel => {
        console.log(dbModel);

        if (dbModel.length > 0) {
            res.json({ msg: "Settings is already setup." });
            return;
        };

        _db
        .create(settings)
        .then(dbModel => {
            res.json({ msg: "updated" });
        })
        .catch(err => {
            console.log(err);
            res.json({ msg: "unable to create settings" });
        });
    });
});

// ======================= //
// === UPDATE SETTINGS === //
// ======================= //
router.route('/').post((req, res) => {
    
    // TODO: Add gold key filter here and email to primary email.
    
    _db
    .findOne({ mod: "Settings" })
    .then(dbModel => {
        if (dbModel){
            const updatedSettings = {
                darkMode: req.body.darkMode ? req.body.darkMode : dbModel.darkMode,
                GTM: req.body.gtm ? req.body.gtm : dbModel.gtm,
                UAID: req.body.uaid ? req.body.uaid : dbModel.uaid,
                primaryUser: req.body.primaryUser ? req.body.primaryUser : dbModel.primaryUser
            };

            res.json({ msg: "Already a thing.", data: updatedSettings});
        } else {
            res.json({ msg: "This page has not be setup yet."});
        };
    })
    .catch( err => {
        console.log(err);
        res.json({ msg: "Unable to update settings." });
    });
});

module.exports = router;