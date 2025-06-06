function getPayload() {
    return { payload: require("../utils").genstr(50000, "&") };
}

module.exports = { getPayload };