function getPayload() {
    return {
        query: "__proto__[polluted]=yes"
    };
}

module.exports = { getPayload };