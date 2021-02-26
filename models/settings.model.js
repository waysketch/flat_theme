const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ============== //
// === SCHEMA === //
// ============== //
const settingsSchema = new Schema({
    mod: { type: String, default: "Settings", unique: true },
    darkMode: { type: Boolean, default: true, required: false },
    gtm: { type: String, required: false },
    uaid: { type: String, required: false },
    primaryUser: { type: String },
    date: { type: Date, default: Date.now }
});

// ============== //
// === EXPORT === //
// ============== //
const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;