const {Router, request, response}=require('express')
const LoginController=require('../Controllers/LoginController')
const SignupController=require('../Controllers/SignupController')
const DashboardController=require('../Controllers/DashboardController')
const { auth } = require('../Controllers/auth')
const router=Router();
//router.get('/login',auth, LoginController.login_get);
router.post('/login',LoginController.login_post);
router.get('/signup',SignupController.signup_get);
router.post('/signup',SignupController.signup_post);
router.get('/dashboard',DashboardController.dashboard_get);
router.post('/dashboard',DashboardController.dashboard_post);
router.post('/switch',DashboardController.dashboard_post);
router.post('/ventilateur',DashboardController.dashboard_post);
router.get(/index/,DashboardController.streaming_get);
module.exports=router