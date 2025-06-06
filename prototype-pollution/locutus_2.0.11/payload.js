function getPayload() {
    return {
        polluted: "__proto__[polluted]=yes"
    };
}

module.exports = { getPayload };