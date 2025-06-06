function getPayload() {
    return JSON.stringify({ "__proto__": { "polluted": "yes" } });
}

module.exports = { getPayload };