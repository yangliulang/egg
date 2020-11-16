const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.session.userId = 'yangyong';
    await this.ctx.render('home.html');
  }
  params() {
    const { ctx } = this;

    // const { params } = ctx;
    ctx.body = `

      params:${JSON.stringify(ctx.params)}\n

    `;
  }
  async post() {
    const {ctx} = this;
    // ctx.response.body = {ret:ctx.request.body}
    ctx.set('server-time',Date.now())
    await ctx.render('post.html')
    // const {ctx} = this;
    // const {service} = ctx;
    // const userId = ctx.session.userId;
    // const name = service.post.getName(userId);
    // ctx.body = { body: ctx.request.body, header: ctx.headers,name };
  }
  upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    ctx.body = { url: 'sssss.jpg' };
  }
}

module.exports = HomeController;
