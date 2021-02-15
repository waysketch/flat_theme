const router = require("express").Router();

router.route("/").get(function(req, res){
    res.send("hello world");
});

module.exports = router;