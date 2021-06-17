  
const bodyParser = require('body-parser');
const User=require('../Models/UserModel')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const express = require('express')
const app=express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports.login_get=(request,response)=>{   
    let token = request.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if (err) throw err;
        
        if(!user) {  return response.status(401).send('no access');}
        
      
        response.sendStatus(200);
    })
    }

module.exports.login_post=async(request,response)=>
{ 

    const {email,password}=request.body;
    try 
    {   
        const user=await User.login(email,password);
    
        console.log(user,'connected');
        response.cookie('auth', user._id, { httpOnly: true }).sendStatus(200)
        /*response.sendStatus(200)
        console.log('connected');*/
    } catch (error) {response.status(404).send(error)}
}