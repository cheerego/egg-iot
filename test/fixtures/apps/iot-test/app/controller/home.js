'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      this.ctx.body =await this.app.iot.GetDeviceShadow('pRb1mK8CTPJ', 'CATCH_100010');
  }
}

module.exports = HomeController;
