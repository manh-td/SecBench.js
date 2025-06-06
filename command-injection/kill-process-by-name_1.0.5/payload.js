function getPayload() {
    return "$(touch kill-process-by-name)";
}

module.exports = { getPayload };