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
            return   this.res.render('login',{error: this.req.flash.error});
        }
        this.res.render('login',{title:"Login"});
    }

    async login()
    {
        let userName = this.req.body.username;
        let pass = this.req.body.password;
        let userModel = new UserModel();
        try {
            let user = await userModel.getUserByUserName(userName);
            if(user.length==0){
                this.req.flash.error="El usuario no existe";
                this.res.redirect('/login');
            }
            if (user[0].active == 0){
                this.req.flash.error="El usuario no se encuentra activo";
                this.res.redirect('/login');
            }

            if(!EncryptService.comparePass(pass, user[0].pass)){
                this.req.flash.error="El password es incorrecto";
                this.res.redirect('/login');
            }

            this.req.session.username= userName;
            this.res.redirect('/');

        }catch(error){
            console.log(error);
        }

    }

}

module.exports = loginController;