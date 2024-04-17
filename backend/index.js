const express = require('express');
const cors = require('cors');
const port = 5000;

//initialize

const app = express();
const userRouter = require('./routers/userRouter')
const guideRouter = require('./routers/guideRouter')
const feedbackRouter = require('./routers/feedbackRouter')
const questionRouter = require('./routers/questionRouter')
const playRouter = require('./routers/playgroundRouter')

//middleware

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use(express.json());

app.use ('/user',userRouter);
app.use ('/guide',guideRouter);
app.use ('/feedback',feedbackRouter);
app.use ('/question',questionRouter);
app.use ('/playground',playRouter);

app.get('/',(req, res)=>{
res.send('response from express')
});

app.listen(port,()=>{
    console.log("express on server");
});