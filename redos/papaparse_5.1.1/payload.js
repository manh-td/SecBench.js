function getPayload() {
    const input = "0".repeat(30000) + "a";
    return { input };
}

module.exports = { getPayload };