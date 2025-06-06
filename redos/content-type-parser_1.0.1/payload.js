function getPayload() {
    return "/".repeat(30000) + "\r\n";
}

module.exports = { getPayload };