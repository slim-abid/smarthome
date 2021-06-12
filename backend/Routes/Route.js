const {Router, request, response}=require('express')
const LoginController=require('../Controllers/LoginController')
const SignupController=require('../Controllers/SignupController')
const DashboardController=require('../Controllers/DashboardController')
const router=Router();
router.get('/login',LoginController.login_get);
router.post('/login',LoginController.login_post);
router.get('/signup',SignupController.signup_get);
router.post('/signup',SignupController.signup_post);
router.get('/',DashboardController.dashboard_get);
router.post('/',DashboardController.dashboard_post);
module.exports=router