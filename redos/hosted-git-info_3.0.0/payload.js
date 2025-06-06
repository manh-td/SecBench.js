function getPayload() {
    const genstr = require("../utils").genstr;
    return "a:" + genstr(49000, "a") + "!";
}

module.exports = { getPayload };