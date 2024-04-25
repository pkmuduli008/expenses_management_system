const express= require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const connectDb = require('./config/connectDb');

dotenv.config();

connectDb();

const app=express();

app.use(morgan('dev'));
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send("<h1>Hello from sender</h1>")
})

const PORT=8080||process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})