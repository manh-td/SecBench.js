function getPayload() {
    return "\x1B[0m\x1B[" + "0".repeat(30);
}

module.exports = { getPayload };