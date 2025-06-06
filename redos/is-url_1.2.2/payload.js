function getPayload() {
    return "a://localhost" + "9".repeat(40000) + "\t";
}

module.exports = { getPayload };