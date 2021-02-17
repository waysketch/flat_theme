const router = require("express").Router();
const Log_db = require("../models").Log;
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

module.exports = router;
