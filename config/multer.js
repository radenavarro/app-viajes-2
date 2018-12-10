const Multer = require('multer');

const storage = Multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/uploads/")// Ruta donde se almacena la imagen (tiene que estar el directorio creado)
    },
    filename: (req, file, callback) => {
        callback(null, 'id' + req.params.id + '-' + file.originalname)// Nombre del archivo
    }
});

const upload = Multer({storage});

module.exports = upload;