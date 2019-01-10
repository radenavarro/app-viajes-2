const Controller = require('../controller');
const UserModel = require('../../models/userModel');
const EncryptService = require('../../services/encryptService');

class loginController extends Controller
{
    constructor(req, res ,next)
    {
        super(req, res ,next)
    }

    index(){
        if(this.req.flash.error){
            return this.res.render('login',{error: this.req.flash.error});
        }
        this.res.render('login',{title:"Login"});
    }

    async login()
    {
        let userName = this.req.body.username;
        let pass = this.req.body.password;
        // let userModel = new UserModel();
        try {
            let errores = false;
            let user;

            if (userName.indexOf("@") !== -1){
                user = await UserModel.findOne({where : {email : userName}});
            } else{
                user = await UserModel.findOne({where : {usuario : userName}});
            }

            if(user.length<=0){
                this.req.flash.error="El usuario no existe";
                errores = true;
                this.res.redirect('/login');
            }

            if(!EncryptService.comparePass(pass, user.password)){
                this.req.flash.error="El password es incorrecto";
                errores = true;
                this.res.redirect('/login');
            }

            if (!errores){
                this.req.session.username = user.usuario;
                this.req.session.userId = user.id;
                this.res.redirect('/');
            }

        }catch(error){
            console.log(error);
        }

    }

}

module.exports = loginController;
