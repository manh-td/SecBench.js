function getPayload() {
    return require("../utils").genstr(12500, "Dell");
}

module.exports = { getPayload };