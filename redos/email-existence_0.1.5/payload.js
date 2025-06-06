function getPayload() {
    return "@".repeat(50000) + " ";
}

module.exports = { getPayload };