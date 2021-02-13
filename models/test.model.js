const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
    //_id: this is made by mongoose for us. DO NOT ADD A CUSTOM ID
    data: { type: String, required: true }, // must be a string "" or RegEx
    foo: { type: Number, required: false }, // must be a number (float, double, int);
    bar: { type: Object, required: false }, // you can pass ANY object to this testSchema.bar
    car: { type: Array, required: false }, // you can pass ANY data inside of the Array []
    date: { type: Date, default: Date.now } // must be a Date object
});

const Test = mongoose.model("Test", testSchema);