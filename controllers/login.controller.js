const router = require("express").Router();

// ============= //
// === LOGIN === //
// ============= //
router.route("/").post(function(req, res){
    try {
        res.json({
            msg: "Welcome",
        });
    } catch (error) {
        res.json({
            err: "Something has gone wrong.",
        });
    };
});

module.exports = router;