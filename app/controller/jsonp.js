const {Controller} = require('egg');
class JSONPController extends Controller{
    index(){
        const {ctx} = this;
        ctx.redirect('https://www.baidu.com')
        // ctx.body = {name:'yy',age:30}
    }
}

module.exports = JSONPController;