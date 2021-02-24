const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ============== //
// === SCHEMA === //
// ============== //
const settingsSchema = new Schema({
    defaultMode: { type: Boolean, default: true, required: false },
    GTM: { type: String, required: false },
    UAID: { type: String, required: false },
    date: { type: Date, default: Date.now } // must be a Date object
});

// ============== //
// === EXPORT === //
// ============== //
const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;