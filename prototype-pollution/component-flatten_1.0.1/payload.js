function getPayload() {
    return {
        tree: { ref: "polluted", name: "__proto__" }
    };
}

module.exports = { getPayload };