const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');

class registerController extends Controller{
    constructor(req,res,next){
        super(req,res,next);
    };
    index() {
        this.res.render('registro', {title: "registro"});
    }

    registro() {
        let pass = this.req.body.regInputPassw;
        let passEnc = EncryptService.encryptPass(pass);
        console.log("password ->"+pass, "Encryptado ->"+passEnc);
    }
}
module.exports = registerController;