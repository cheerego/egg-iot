const IOT = require('./iot');
module.exports = app => {
    app.beforeStart(async () => {
        app.iot = new IOT(app.config.iot);
    });
};

