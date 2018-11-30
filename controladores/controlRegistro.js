const Controlador = require('./controlador');
// const EncryptService = require('../../services/encryptService');
// const UserModel = require('../../models/userModel');
// const UUidHelper = require('../../helpers/UUidHelper');
// const EmailService = require('../../services/emailService');

class controlRegistro extends Controlador{

    constructor(req, res, next){
        super(req, res, next);
    }

    // index(){
    //     if(this.req.flash.error){
    //         this.res.render('registro',{error: this.req.flash.error});
    //         this.req.flash.error=null;
    //
    //     }else{
    //         this.res.render('registro',{title:"registro"});
    //     }
    // }

    /**
     * Método que saca por pantalla mensaje de error si las contraseñas no coinciden
     */
    validar(){
        console.log(this.req.body.regInputPassw);
        console.log(this.req.body.regInputPasswAgn);
        if (this.req.body.regInputPassw !== this.req.body.regInputPasswAgn){
            this.res.render('registro.hbs', {errorPasswDistintos: "Las contraseñas no coinciden"});
        } else{
            this.res.render('registro.hbs');
        }
    }

    // async register() {
    //     this.req.flash.error = null;
    //     let user = {};
    //     user['username'] = this.req.body.username;
    //     user.email = this.req.body.email;
    //     user.pass = EncryptService.encryptPass(this.req.body.pass);
    //     user.active = 0;
    //     user.hash = UUidHelper.getUUid(3, 4);
    //     try {
    //
    //         let userModel = new UserModel();
    //
    //         let resultUserByEmail = await userModel.getUserByEmail(user.email);
    //         let resultUserByUserName = await userModel.getUserByUserName(user.username);
    //
    //         if ((resultUserByEmail.length > 0) && (resultUserByUserName.length > 0)) {
    //             this.req.flash.error = "El email o username ya existe";
    //             this.index();
    //         } else {
    //             let result = await userModel.insert(user);
    //             let emailService = new EmailService();
    //             let resultEmail = await emailService.sendRegisterEmail(user);
    //             this.res.redirect('/');
    //         }
    //
    //     } catch (error) {
    //         this.req.flash.error = error;
    //         //return this.res.redirect('/register');
    //     }
    // }
}

module.exports = controlRegistro;