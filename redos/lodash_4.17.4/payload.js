const genstr = require("../utils").genstr;

function getPayload() {
    return genstr(50000, "A");
}

module.exports = { getPayload };