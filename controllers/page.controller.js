const router = require("express").Router();
const _db = require("../models").Page;
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;
const passport = require('../utils/passport');

if (process.env.NODE_EV !== "production") {
    require('dotenv').config();
}

// ================= //
// === GET PAGES === //
// ================= //

router.route("/").get(( _ , res) => {
    console.log('got it?');

    _db
    .find({})
    .then( dbModel => {
        res.json(dbModel);
    })
    .catch( _ => {
        console.log("[ERROR][API][PAGES] Unable to reach database.");
        res.status(500).json({
            data: "Oops! Something has gone wrong.",
            msg: "Oops! Something has gone wrong."
        })
    });
});

// =================== //
// === CREATE PAGE === //
// =================== //

router.route("/create").post(authenticateUser, (req, res) => {
    _db
        .create(req.body)
        .then(dbModel => {
            res.json(dbModel);
        })
        .catch(error => {
            res.status(422).json(error);
        });
});

// ================== //
// === DELETE ALL === //
// ================== //
router.route("/nuke").get(authenticateUser,( _ , res) => {

    // TODO: check key

    // === DROP IT === //
    _db
    .remove()
    .then( _ => {
        res.send('done');
    });
});

module.exports = router;

// Fake Data example
const fakeDataFromDB = [
    {
        name: "Home",
        route: "/",
        nav: ["header"],
        hide_footer: false,
        components: [
            {
                name: "Header",
                data: {
                    title: "Home Page"
                }
            },
            {
                name: "Footer",
                data: {
                    empty: true
                }
            }
        ]
    },
    {
        id: "p2021HP",
        name: "About",
        route: "/about",
        nav: ["nav", "footer"],
        components: [
            {
                name: "Header",
                data: {
                    title: "Our Story"
                }
            }
        ]
    },
    {
        id: "p2021HP",
        name: "Privacy Policy",
        route: "/privacy",
        nav: [],
        components: [
            {
                name: "Header",
                data: {
                    title: "Privacey Policy"
                }
            }
        ]
    }
]