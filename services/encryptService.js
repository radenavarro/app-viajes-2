const Bcrypt = require('bcrypt');

class encryptService {
    static encryptPass(pass){
        return Bcrypt.hashSync(pass, 10);
    }
}
module.exports = encryptService;