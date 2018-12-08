var express = require('express');
var router = express.Router();
const RegisterController = require('../controllers/auth/registerController');
const SessionController = require('../controllers/auth/sessionController');
const LoginController = require('../controllers/auth/loginController');
const HomeController = require('../controllers/homeController');
const AdminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', function(req, res, next) {
    let homeCont = new HomeController(req, res, next);
    return homeCont.index();
});

// Ruta para acceder al registro
router.get('/registro', function(req, res, next) {
  let registerController = new RegisterController(req,res,next);
  return registerController.index();
});

router.post('/registro', function (req, res, next) {
    let registerController = new RegisterController(req,res,next);
    let isVal = registerController.validar();//    Valida que los 2 campos de contraseña sean iguales
    if (isVal) {
        return registerController.registro();//    Registra el usuario
    } else {
        return registerController.muestraErrores();
    }
});

router.get('/getPassw', function (req, res, next) {
    res.render('login.hbs', {getPass: "SI"});//   Si existe getPass, aparece el popup de recuperar contraseña
});

router.get('/login',(req, res ,next)=>{
    let loginController = new LoginController(req, res, next);
    return loginController.index();
});

router.post('/login',(req, res, next)=>{
    let loginController = new LoginController(req, res ,next);
    return loginController.login();
});

router.get('/closeSession',(req, res ,next)=>{
    let sessionController = new SessionController(req, res ,next);
    return sessionController.closeSession();
});

router.get('/admin', (req, res, next) =>{
    let adminControl = new AdminController(req, res, next);
    adminControl.checkSession();
});

router.post('/insviaje', (req, res, next) => {
    let adminControl = new AdminController(req, res, next);
    adminControl.addTravel();
});

router.get('/eliminaviaje/:id', (req, res, next) =>{
    let adminControl = new AdminController(req, res, next);
    adminControl.removeTravel();
    // console.log(req.params.id);
});

module.exports = router;
