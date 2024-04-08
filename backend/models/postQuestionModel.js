const {Schema, model} = require("../connection")

const myschema = new Schema({
    question: {type:String, require:true},
    category:{String},
    createdAt:{Date},
});

module.exports = model("question", myschema);