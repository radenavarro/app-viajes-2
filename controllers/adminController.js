const Controller = require('./controller');
const UserModel = require('../models/userModel');
const TravelModel = require('../models/travelModel');

class adminController extends Controller{
    constructor(req, res, next){
        super(req, res, next);
    }

    /**
     * Método que valida que un usuario esté logeado y tiene los permisos necesarios. Si no está logeado, vuelve a home;
     * si lo está y tiene permiso 3 (admin) carga datos de travels además de su nombre de usuario y sus permisos
     *
     * @returns {Promise<void>}
     */
    async checkSession() {
        // TODO: Separar la validación en un método aparte
        let loggedUser = this.req.session.username;
        let model = new UserModel();

        // Si existe sesión de usuario, saca sus permisos
        let userGrants = this.req.session.userId ? await(model.getUserGrants(this.req.session.userId)) : 0;

        // Permisos = 1 -> visitante; Permisos = 2 -> usuario; Permisos = 3 -> admin
        if (loggedUser == undefined || userGrants[0].permisos != 3){
            // Redirige a home si no es admin
            this.res.redirect('/');
        } else {
            // Extrae todos los viajes de la base de datos si es admin
            let htmlTravels = await (model.getAllTravels());

            this.res.render('admin', {
                username: loggedUser,
                permiso: userGrants,
                rowTravels: htmlTravels
            });
        }
    }

    async addTravel(){
        try {
            let travelModel = new TravelModel();
            let newTravel = [
                this.req.body.travel,
                this.req.body.description,
                this.req.body.price,
                this.req.body.type
            ];
            console.log(this.req.body.travel);
            let result = await travelModel.insert(newTravel);
            this.res.redirect('/admin');

        } catch(err){
            console.log(err);
        }

    }

    async removeTravel(){
        let idViaje = this.req.params.id;
        try {
            let tmodel = new TravelModel();
            await tmodel.delete(idViaje);
            this.res.redirect('/admin');

        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = adminController;