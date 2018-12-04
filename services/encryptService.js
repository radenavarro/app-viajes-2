const bcrypt = require('bcrypt');

class encryptService {
    static encryptPass(pass){
        return bcrypt.hashSync(pass, 10);
    }
    static comparePass(password, hash){
        return bcrypt.compareSync(password, hash);
    }
}
module.exports = encryptService;