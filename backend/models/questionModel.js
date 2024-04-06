const {Schema, model} = require("../connection")

const myschema = new Schema({
    user: {type:String, require:true},
    question: {type:String, require:true},
    tags:Array,
    type:String,
    createdAt:{Date},
});

module.exports = model("question", myschema);