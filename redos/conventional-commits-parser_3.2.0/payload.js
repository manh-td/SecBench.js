function getPayload() {
    return "b" + "\r\n".repeat(2000000) + "b";
}

module.exports = { getPayload };