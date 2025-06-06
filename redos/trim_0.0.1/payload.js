function getPayload() {
    return "1" + " ".repeat(50000) + "1";
}

module.exports = { getPayload };