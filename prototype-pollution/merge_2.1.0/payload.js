function getPayload() {
    return JSON.parse('{"x": {"__proto__":{"polluted":"yes"}}}');
}

module.exports = { getPayload };