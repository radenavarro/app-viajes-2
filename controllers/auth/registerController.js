const Controller = require('../controller');

class registerController extends Controller{
    constructor(req,res,next){
        super(req,res,next);
    };
    index() {
        this.res.render('registro', {title: "registro"});
    }

    registro() {
        console.log(JSON.stringify(this.req.body));
    }
}
module.exports = registerController;