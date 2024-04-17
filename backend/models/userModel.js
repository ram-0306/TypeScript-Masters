const { Schema, model } = require("../connection")

const myschema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: {type : String},
    avatar: { type: String, default: 'avtarPlaceholder.png' },
    role: { type: String, default: 'user' },
    createdAt: { Date },
});

module.exports = model("user", myschema);