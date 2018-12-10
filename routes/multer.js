const router = require('express').Router();
const upload = require('../config/multer');

/**
 * /multer/upload/parámetro id (app.js L47)
 */
router.post('/upload/:id', upload.single('file'), (req, res, next)=>{
    console.log('llega');
    if (!req.file){
        return res.status(500).send("No has seleccionado un archivo válido");
    }

    // res.send(`Se ha subido el archivo ${req.file.filename}`);
    res.redirect('/admin');
});

module.exports = router;