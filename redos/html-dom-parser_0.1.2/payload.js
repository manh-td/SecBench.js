function getPayload() {
    const genstr = require("../utils").genstr;
    let attack_str = "<head" + genstr(4000000, " S");
    return { attack_str };
}

module.exports = { getPayload };