const jwt=require('jsonwebtoken')
const maxAge=5000*60*60*24;
/*--------------------------------------------*/
const createToken=(id)=>{
    return jwt.sign({id},'secret word',{expiresIn:maxAge})
}
/*---------------------------------------*/
module.exports.signup_get=(request,response)=>
{
    response.render('signup');
};
/*----------------------------------------------*/
const handleErrors=(error)=>{
    console.log(error.message,error.code);
    let err ={email:'',password:''};
    if(error.message.includes('user validation failed'))
    {
        
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    }
return err;

}

/*--------------------------------------------------*/
module.exports.signup_get=(request,response)=>
{
    response.render('signup');
};
/*----------------------------------------------------*/
module.exports.signup_post=async (request,response)=>
{   const {email,password}=request.body;

try {
    response.send({email,password})
    //const user=await User.create({email,password});
    //const token=createToken(user._id);
    //response.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})

    //response.status(200).json({user:user._id});
} catch (error)
{
   const errors=handleErrors(error);
   response.status(404).json({errors});
    
}
   };