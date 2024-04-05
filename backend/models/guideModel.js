const {Schema, model} = require("../connection")

const myschema = new Schema({
    title: {type:String, require:true},
    subtitle: {type:String, require:true},
    content:String,
    category:{String},
    createdAt:{Date},
});

module.exports = model("guide", myschema);