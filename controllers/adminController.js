const Controller = require('./controller');
const UserModel = require('../models/userModel');

class adminController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
    }

    async checkSession() {
        let loggedUser = this.req.session.username;
        if (loggedUser == undefined){
            this.res.redirect('/');
        } else {
            let model = new UserModel();
            let htmlTravels = await (model.getAllTravels());
            console.log(htmlTravels);
            this.res.render('admin', {username: loggedUser, permiso: "insPermiso", rowTravels: htmlTravels});
        }
    }

    // async buildHtmlTravels(){
    //     let html = '';
    //     let model = new UserModel();
    //     let travelContent = await model.getAllTravels();
    //     // console.log(travelContent[0].travel);
    //     for (let i in travelContent){
    //         html += '<tr>';
    //         html += `<td>${travelContent[i].id}</td><td>${travelContent[i].travel}</td><td></td><td>${travelContent[i].description}</td><td></td><td>${travelContent[i].price}</td><td></td><td></td>`
    //         html += '</tr>';
    //     }
    //     return html;
    // }

}

module.exports = adminController;