const {Schema, model, Types} = require("../connection")

const myschema = new Schema({
    user:  {type: Types.ObjectId, ref: 'user'},
    title: {type:String, require:true},
    question: {type:String, require:true},
    category:{type : String},
    tags: {type: Array},
    createdAt:{type : Date, default: Date.now},
});

module.exports = model("question", myschema);