function getPayload() {
    return {
        testProperty: "hi",
        prototype: { polluted: "yes" }
    };
}

module.exports = { getPayload };