function getPayload() {
    return "$(touch dns-sync)";
}

module.exports = { getPayload };