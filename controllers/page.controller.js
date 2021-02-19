const router = require("express").Router();
const _db = require("../models").Page;
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;

if (process.env.NODE_EV !== "production") {
    require('dotenv').config();
}

// ================= //
// === GET PAGES === //
// ================= //

router.route("/").get((req, res) => {
    _db
        .find({})
        .then( dbModel => {
            res.json(dbModel);
        })
        .catch( _ => {
            res.json({
                msg: "Oops! Something has gone wrong."
            })
        })
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
router.route("/nuke").post((req, res) => {
    // === MALL COP === //
    console.log(req.body);
    if (process.env.APP_SECRET !== req.body.password) { return res.send('Nice try hacker'); };

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