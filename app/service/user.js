const {Service} = require('egg');

class UserService extends Service {
    queryInfoById(name){

        return 100+name;
    }
}

module.exports = UserService;