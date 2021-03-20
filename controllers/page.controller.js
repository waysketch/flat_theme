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

    let route = req.body.route;

    // === TODO: FILTER === //
    let user = "Unautherized User";
    if (req.body.email){
        user = req.body.email;
    };

    while (route.charAt(0) === "/") {
        route = route.substring(1);
    }

    const cleanedPageData = {
        name: req.body.name ? req.body.name : 'Untitled',
        route: `/${route}`,
        nav: req.body.nav ? req.body.nav : [],
        hide_footer: req.body.hide_footer ? req.body.hide_footer : false,
        components: req.body.components ? req.body.components : [],
        last_updated: {
        by: user,
        date: Date.now(),
        }
    };

    console.log(cleanedPageData);

    _db
        .create(cleanedPageData)
        .then(dbModel => {

            //TODO update sitemap and robots.txt

            res.json(dbModel);
        })
        .catch(error => {
            console.log(error);
            res.status(422).json(error);
        });
});

// ================================ //
// === UPDATE COMPONENTS/BLOCKS === //
// ================================ //
router.route("/update/blocks").post(authenticateUser, ( req , res ) => {

    const { blocks, pathToPage } = req.body;

    console.log(blocks);

    if (!blocks) { res.json({msg: "Error, no blocks found."}); return; };
    if (!pathToPage) { res.json({msg: "Unable to identify the page you are on. Please refresh the browser and try again."}); return; }

    _db.updateOne({ route: pathToPage }, { $set: { components: blocks }})
    .then( dbReturn => {

        if (blocks === dbReturn.components) { res.json({ msg: "Nothing to update. Blocks did not change." }); return; };

        // TODO dbReturn.components has an "undefined" tail. Not sure why.
        // console.log(blocks);
        // console.log(dbReturn.components);
        res.json({ msg: "You SOB you did it!" });
    })
    .catch( err => {
        res.json({ msg: "Error" });
    });

});

// ================== //
// === DELETE ALL === //
// ================== //
router.route("/nuke").get(authenticateUser,( _ , res ) => {

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