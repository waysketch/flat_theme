const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ============= //
// === TYPES === //
// ============= //
const types = [
    "email",
    "red flag"
];

// ============== //
// === SCHEMA === //
// ============== //
const logSchema = new Schema({
    type: { type: String, required: true },
    log: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// ============== //
// === EXPORT === //
// ============== //
const Log = mongoose.model("Log", logSchema);

module.exports = Log;