const Controller = require('../controller');
class sessionController extends  Controller
{
    constructor(req, res, next)
    {
        super(req, res ,next)
    }

    closeSession()
    {
        this.req.session.destroy();
        this.res.redirect('/');
    }

}
module.exports = sessionController;