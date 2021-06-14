  
const {request}=require('express')
const User=require('../Models/UserModel')

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
       
    } catch (error) {response.status(404).send(error)}
}