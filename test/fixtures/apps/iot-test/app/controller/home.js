'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      console.log(this.app.plugins);
    this.ctx.body = 'hi, ' + this.app.plugins.iot.name;
  }
}

module.exports = HomeController;
