var express = require('express');
var router = express.Router();

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

// Pagina de login
router.get('/login', function (req, res, next) {
   res.render('login');
});

// Pagina de registro
router.get('/registro', function (req, res, next) {
    res.render('registro');
});
module.exports = router;
