const router = require("express").Router();
const _db = require("../models");

// ================ //
// === Read All === //
// ================ //
router.route("/").get((req, res) => {
    console.log(`[ACCESS]: ${req.query}`);

    _db.Test
    .find({})
    .sort({ date: -1 })
    .then( dbModel => {
        console.log(dbModel);
        // This is where you would do stuff with the data before sending it back.
        const finalData = dbModel.data;
        res.json(finalData);
    })
    .catch( error => {
        console.log("");
        console.log(error);
        res.json({
            msg: "Oops! Something has gone wrong."
        })
    })
});

// ============== //
// === Create === //
// ============== //
router.route("/").post((req, res) => {
    // this  is where you may want to clean the 
    // data or check it first before putting it into your database.

    _db.Test
    .create(req.body)
    .then(dbModel => {
        // this is where you could make a custom return or more api calls.
        res.json(dbModel);
    })
    .catch( error => {
        res.status(422).json(error);
    });
});

// ================ //
// === Read One === //
// ================ //
router.route("/:id").get((req, res) => {
    const _id = req.params.id;
    _db.Test
    .findById(_id)
    .then(dbModel => {
        res.json(dbModel);
    })
    .catch( error => {
        res.status(422).json(error);
    });
});

// ============== //
// === Update === //
// ============== //
router.route("/:id").put((req, res) => {
    const _id = req.params.id;

    _db.Test
    .findOneAndUpdate({ _id: _id }, req.body)
    .then(dbModel => {
        res.json(dbModel);
    })
    .catch(error => {
        res.status(422).json(error);
    });
});

// ============== //
// === Delete === //
// ============== //
router.route("/:id").delete((req, res) => {
    const _id = req.params.id;
    _db.Test
    .findById({ _id: _id })
    .then(dbModel => {
        dbModel.remove();
    })
    then(dbRes => {
        res.json(dbRes);
    })
    .catch(error => {
        res.status(422).json(error);
    });
});

module.exports = router;