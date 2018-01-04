const IOT = require('./iot');
module.exports = agent => {
    agent.iot = new IOT(agent.config.iot);
};

