const {Schema, model, Types} = require("../connection")

const myschema = new Schema({
    user:  {type: Types.ObjectId, ref: 'user'},
    question: {type: Types.ObjectId, ref: 'question'},
    title: {type:String, require:true},
    content:{type : String},
    upvotes:{type : Number, default: 0},
    createdAt:{type : Date, default: Date.now},
});

module.exports = model("answer", myschema);