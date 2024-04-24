const { Schema, model } = require("../connection")

const myschema = new Schema({
    title: { type: String, default: 'Untitled Guide' },
    subtitle: { type: String, default: 'write subtitle here...' },
    category: { type: String, default: 'Unknown' },
    content: { type: Object },
    category: { type: String, default: 'Miscellaneous' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model("guides", myschema);