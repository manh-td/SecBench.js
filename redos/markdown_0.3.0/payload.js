function getPayload() {
    const { genstr } = require("../utils");
    return "cispa" + genstr(300000, "_");
}

module.exports = { getPayload };