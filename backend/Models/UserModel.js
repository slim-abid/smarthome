const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const {isEmail}=require('validator')

const userSchema=new mongoose.Schema({
    email:
    {
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email already used'],
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:
    {
        type:String,
        required:[true,'Password is required'],
        unique:[true,"Password already used"],
        minlength:[6,"the password must contain at least 6 caracters"]
    }
   
 
 
 });
 userSchema.pre('save',async function(next){
    //generate a salt 
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    console.log('Password hashed succefully');
    next();
})

 userSchema.statics.login=async function(email,password)
 {  
     const user=await this.findOne({email});
     
     if(user)
     {
         const auth =await this.findOne({password})
         if(auth)
         {
             return user

         }
         throw Error('Incorrect password')
     }
     throw Error('Incorrect e-mail')
 
 };
 userSchema.statics.findByToken = function(token,cb){
    const user = this;
        user.findOne({"_id":token},function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
}

const User=mongoose.model('user',userSchema);
module.exports=User;