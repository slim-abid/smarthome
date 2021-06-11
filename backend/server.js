const express = require('express')
const {request,response}=require('express')
const mongoose=require("mongoose")
const authRoute=require('./Routes/Route')
const URL2="mongodb+srv://User2:1234User2@application1cluster.kqjgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const URL1="mongodb+srv://User1:1234User1@application1cluster.kqjgt.mongodb.net/LoginTest?retryWrites=true&w=majority"
const cors =require('cors')
const app=express();

//middlewares
app.use(express.json());
app.use(cors())
app.use(authRoute)   
//Connect to the database
mongoose.connect(URL1,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((result)=>{app.listen(3001);console.log("connected!!");})
.catch((e)=>console.log("Can't connect to database"))
console.log("connected!!");