const Multer = require('multer');

const storage = Multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/uploads/")
    },
    filename: (req, file, callback) => {
        callback(null, 'id' + req.params.id + '-' + file.originalname)
    }
});

const upload = Multer({storage});

module.exports = upload;