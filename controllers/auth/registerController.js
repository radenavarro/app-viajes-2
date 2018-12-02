const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');
const UserModel = require('../../models/userModel');
const UUidHelper = require('../../helpers/UUidHelper');

class registerController extends Controller{
    constructor(req,res,next){
        super(req,res,next);
    };
    index() {
        this.res.render('registro', {title: "registro"});
    }

    /**
     * Método que saca por pantalla mensaje de error si las contraseñas no coinciden
     */
    validar() {
        return (this.req.body.regInputPassw === this.req.body.regInputPasswAgn);
    }

    muestraErrores(){
        this.res.render('registro.hbs', {errorPasswDistintos: "Las contraseñas no coinciden"});
    }

    async registro() {
        let user = {};
        user.password = EncryptService.encryptPass(this.req.body.regInputPassw);
        user['usuario'] = this.req.body.usuario;
        user.email = this.req.body.email;
        user.hash=UUidHelper.getUUid(3,4);

        try{

            let userModel = new UserModel();
            let result = await userModel.insert(user);    
            console.log(result.insertId);

        } catch(error){
            console.log(error);
        }
    }
}
module.exports = registerController;