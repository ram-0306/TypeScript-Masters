const express = require('express');
const cors = require('cors');
const port = 5000;
//initialize
const app = express();
const userRouter = require('./routers/userRouter')

//middleware

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use(express.json());

app.use ('/user',userRouter);

app.get('/',(req, res)=>{
res.send('response from express')
});

app.listen(port,()=>{
    console.log("express on server");
});