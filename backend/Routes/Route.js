const {Router, request, response}=require('express')
const LoginController=require('../Controllers/LoginController')
const SignupController=require('../Controllers/SignupController')
const router=Router();
router.get('/login',LoginController.login_get);
router.post('/login',LoginController.login_post);
router.get('/signup',SignupController.signup_get);
router.post('/signup',SignupController.signup_post);
router.get('/',function(request,response){response.send("<h1>Hello from backend Home</h1>")})
module.exports=router