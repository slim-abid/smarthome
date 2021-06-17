const User=require('../Models/UserModel')
const cookieParser = require('cookie-parser');
const express = require('express');

let auth = (req,res,next) => {
    let token = req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if (err) throw err;
        
        if(!user) {  return res.status(401).send('no access');}
        
        req.token = token
        next();
    })
}

module.exports = {auth}