var express = require('express');
var router = express.Router();
var ControlRegistro = require('../controladores/controlRegistro');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('plantilla.hbs', { titulo: 'Express' });
});
// Ruta para acceder al login
router.get('/login', function(req, res, next) {
  res.render('login.hbs', {titulo: 'LOGIN'});
});
// Ruta para acceder al registro
router.get('/registro', function(req, res, next) {
  res.render('registro.hbs', {titulo: 'REGISTRO'});
});

router.post('/registro', function (req, res, next) {
    let insUser = new ControlRegistro(req, res, next);
    // console.log(insUser);
    insUser.validar();
});

router.get('/getPassw', function (req, res, next) {
    // res.redirect('login');
    res.render('login.hbs', {getPass: "SI"});
});

module.exports = router;
