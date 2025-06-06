const { genstr } = require("../utils");

function getPayload() {
    return genstr(50000, "X");
}

module.exports = { getPayload };