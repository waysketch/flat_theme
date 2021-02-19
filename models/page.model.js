const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ============ //
// === NOTE =========================================== //
// === Endpoints can be found in the page.controller.js //
// ==================================================== //

// ============== //
// === SCHEMA === //
// ============== //
const pageSchema = new Schema({
    name: { type: String, required: true },
    route: { type: String, required: true, unique: true },
    nav: { type: Array, required: false },
    hide_footer: { type: Boolean, default: false, required: false },
    components: { type: Object, required: false },
    date: { type: Date, default: Date.now }
});

// ============== //
// === EXPORT === //
// ============== //
const Page = mongoose.model("Page", pageSchema);

module.exports = Page;

// ==================== //
// === EXAMPLE DATA === //
// ==================== //
/*
{
    id: "p2021HP",
    name: "Home",
    route: "/",
    nav: ["header", "footer"],
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
*/