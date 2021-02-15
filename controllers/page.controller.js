const router = require("express").Router();

// ================= //
// === GET PAGES === //
// ================= //
router.route("/").get(function (req, res) {
    res.json(fakeDataFromDB);
});

module.exports = router;


// fake data
// TODO: Model for Pages
const fakeDataFromDB = [
    {
        id: "p2021HP",
        name: "Home",
        route: "/",
        nav: ["header"],
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