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

router.post('/registro', function (req, res, next) {
    console.log(req.body.regInputPasswAgn);
    // if (!req.body) return res.sendStatus(400)
    // res.send(req);
});

module.exports = router;
