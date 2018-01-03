const IOT = require('./iot');
module.exports = app => {

    app.beforeStart(async () => {
        let iot = new IOT(app.config.iot);
        app.iot = iot;
    });
};

