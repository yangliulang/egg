const {Controller} = require('egg');

class ServiceController extends Controller {
    constructor(ctx){
        super(ctx);
        this.serviceName = 'getuserif'
    }
    async index(){
        const userInfo = this.ctx.service.user.queryInfoById(this.serviceName);
        this.ctx.body = `userInfo:${userInfo}`
    }
}

module.exports = ServiceController;