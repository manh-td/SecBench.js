function getPayload() {
    return "@" + genstr(40000, "@") + "!";
}

module.exports = { getPayload };