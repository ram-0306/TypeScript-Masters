const {Schema, model} = require("../connection")

const myschema = new Schema({
    name: {type: String,require:true},
    email: {type: String,require:true},
    avatar: {String , default: 'avatar_placeholder.png'},
    password: {type: String },
    role: {type:Number , default: 'user'},
    createdAt : Date,

});

module.exports = model("user", myschema)