module.exports = app => {
  app.addSingleton('iot', createIot);
};

function createIot(config, app) {
  // 创建实例
  const IOT = require('./iot');
  const iot = new IOT(config);
  app.beforeStart(async () => {
    iot.GetDeviceShadow('pRb1mK8CTPJ', 'CATCH_100010').then(console.log);
  });
  return new IOT(config);
}
