const router = require("express").Router();
const Log_db = require("../models").Log;
const User_db = require("../models").User;
const EmailAPI = require("../utils/middleware/nodemailer");
require("dotenv").config();

// ==================== //
// === SIGNUP EMAIL === //
// ==================== //
router.route("/signup").post((req, res) => {
    const { email, _token } = req.body;

    // Gatekeeper
    if (_token !== process.env.APP_SECRET) {
        res.send("Unable to Authenticate sender.");
    };

    EmailAPI.sendSignupEmail(email)
    .then( emailData => {
        const thisGuy = emailData.accepted[0];

        Log_db
        .create( { type: "email", log: `A signup email was sent to ${thisGuy}`})
        .then( _ => {
            res.status(200).send("Sent");
        })
        .catch( err => {
            res.send("Unable to make Log");
        });
    })
    .catch( err => {
        res.status(500).json({ msg: "Unable to send email.", err});
    });
});

router.route("/verify/:email/:token").get((req, res) => {
    const { email, token } = req.params;

    User_db
    .updateOne({ email: email, temp_token: token }, { $set: { verified: true, temp_token: `Accepted_${Date.now()}`}})
    .then( _ => {
        res.send("Thanks");
    })
    .catch( err => {
        res.json(err);
    });
});

// ============================= //
// === NEW USER VERIFICATION === //
// ============================= //
router.route("/verification").post((req, res) => {
    const { email, _token } = req.body;

    // Gatekeeper
    if (_token !== process.env.APP_SECRET) {
        res.send("Unable to Authenticate sender.");
    };

    EmailAPI.sendVerificationEmail(email)
    .then( emailData => {
        const thisGuy = emailData.accepted[0];

        Log_db
        .create( { type: "new user", log: `Verification email sent to ${thisGuy}`})
        .then( _ => {
            res.status(200).send("Sent");
        })
        .catch( err => {
            res.send("Unable to make Log");
        });
    })
    .catch( err => {
        res.status(500).json({ msg: "Unable to send verification email.", err});
    });
});

// ============== //
// === EXPORT === //
// ============== //
module.exports = router;
