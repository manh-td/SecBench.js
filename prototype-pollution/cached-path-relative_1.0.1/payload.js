function getPayload() {
    return {
        "__proto__": { polluted: true }
    };
}

module.exports = { getPayload };