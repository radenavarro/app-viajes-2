var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/inicio', function(req, res, next) {
//   res.render('plantilla.hbs', { titulo: 'Express' });
// });
// Ruta para acceder al login
router.get('/login', function(req, res, next) {
  res.render('login.hbs', {titulo: 'LOGIN'});
});

module.exports = router;
