function getPayload() {
    const Config = require("think-config");
    const config = new Config({ name: 2 });

    return config;
}

module.exports = { getPayload };