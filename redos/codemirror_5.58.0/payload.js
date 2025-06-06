function getPayload() {
    return "a".repeat(65536) + "_t";
}

module.exports = { getPayload };