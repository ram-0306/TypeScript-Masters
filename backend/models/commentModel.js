const {Schema, model, Types} = require("../connection")

const myschema = new Schema({
    answer: {type: Types.ObjectId, ref: 'answer'},
    user:  {type: Types.ObjectId, ref: 'user'},
    text:{type : String},
    createdAt:{type : Date, default: Date.now},
});

module.exports = model("comments", myschema);