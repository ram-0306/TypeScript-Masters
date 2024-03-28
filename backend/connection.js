const mongoose = require('mongoose');

const url ='mongodb+srv://ram0306:ram@cluster0.zadtfa1.mongodb.net/typescriptmasters?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url)
.then((result)=>{
console.log("connected");
})
.catch((err)=>{
    console.log(err);
});

module.exports = mongoose;
