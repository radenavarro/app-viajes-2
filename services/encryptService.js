const Bcrypt = require('bcrypt');

class encryptService {
    static encryptPass(pass){
        return Bcrypt.hashSync(pass, 10);
    }
    static comparePass(password, hash){
        return Bcrypt.compareSync(password, hash);
    }
}
module.exports = encryptService;