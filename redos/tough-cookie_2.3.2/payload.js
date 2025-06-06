function getPayload() {
    const genstr = require("../utils").genstr;
    return "x" + genstr(50000, " ") + "x";
}

module.exports = { getPayload };