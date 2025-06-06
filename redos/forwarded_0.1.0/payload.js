function getPayload() {
    const genstr = require("../utils").genstr;
    return "x" + genstr(60000, " ") + "x";
}

module.exports = { getPayload };