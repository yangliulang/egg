const { Controller } = require('egg');

class HTTPController extends Controller {
  post() {
    this.sucess({ name: 'yy' });
  }
}

module.exports = HTTPController;
