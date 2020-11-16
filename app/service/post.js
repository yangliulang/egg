const {Service} = require('egg')

class PostService extends Service {
    getName(name){
        console.log('getName->',name)
        return {name}
    }
}

module.exports = PostService;