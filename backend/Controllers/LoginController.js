  
const {request}=require('express')
const User=require('../Models/UserModel')
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports.login_get=(request,response)=>{    User.find()
    .then(users=>response.json(users))
    .catch(console.log("No users"))}
module.exports.login_post=async(request,response)=>
{ 

    const {email,password}=request.body;
    try 
    {   
        const user=await User.login(email,password);
        response.send(user._id)
        console.log(user,'connected');
        res.cookie('auth', user._id, { httpOnly: true }).sendStatus(200)
        /*response.sendStatus(200)
        console.log('connected');*/
    } catch (error) {response.status(404).send(error)}
}