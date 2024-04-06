const mongoose = require('mongoose');
const url ='mongodb+srv://ram0306:1234@cluster0.zadtfa1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)

.then((result)=>{
console.log("database connected");
})
.catch((err)=>{
    console.log(err);
});

module.exports = mongoose;
