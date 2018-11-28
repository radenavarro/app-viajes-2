var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('plantilla', { titulo: 'Express' });
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
