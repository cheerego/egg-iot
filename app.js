module.exports = app => {
    app.addSingleton('iot', createIot);
}

function createIot(config, app) {
    // 创建实例
    const IOT = require('./iot');
    return new IOT(config);
}