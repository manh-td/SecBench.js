function getPayload() {
    const genstr = require("../utils").genstr;
    return {
        str: genstr(8, "`") + genstr(700, " ") + genstr(11, "`")
    };
}

module.exports = { getPayload };