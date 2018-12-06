const Controller = require('./controller');
const UserModel = require('../models/userModel');

class adminController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
    }

    checkSession() {
        let loggedUser = this.req.session.username;
        if (loggedUser == undefined) this.res.redirect('/');
        else (this.res.render('admin', {username: loggedUser, permiso: "insPermiso"}));
    }

}

module.exports = adminController;