function getPayload() {
    return "a" + ("." + "a".repeat(55)).repeat(4) + "#";
}

module.exports = { getPayload };