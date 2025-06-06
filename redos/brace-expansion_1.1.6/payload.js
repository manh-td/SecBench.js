function getPayload() {
    return {"payload": "{" + ",".repeat(24) + "\n}"};
}

module.exports = { getPayload };