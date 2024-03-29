const mongoose = require('mongoose');
const url ='mongodb+srv://ayushsingh723585:1234@cluster0.6dkzsjv.mongodb.net/typescriptmasters?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)

.then((result)=>{
console.log("connected");
})
.catch((err)=>{
    console.log(err);
});

module.exports = mongoose;
