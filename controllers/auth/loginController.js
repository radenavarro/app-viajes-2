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
            let errores = false;
            let user = await userModel.getUserByUserName(userName);
            if(user.length==0){
                this.req.flash.error="El usuario no existe";
                errores = true;
                this.res.redirect('/login');
            }

            if(!EncryptService.comparePass(pass, user[0].password)){
                this.req.flash.error="El password es incorrecto";
                errores = true;
                this.res.redirect('/login');
            }

            if (!errores){
                // console.log(userName);
                this.req.session.username = userName;
                console.log(this.req.session.username);
                this.res.redirect('/');
            }

        }catch(error){
            console.log(error);
        }

    }

}

module.exports = loginController;