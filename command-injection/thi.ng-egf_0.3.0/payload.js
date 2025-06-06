function getPayload() {
    return {
        command: "foo",
        args: "bar; touch egf",  // Use semicolon instead of backticks
        opts: { decrypt: true }
    };
}

module.exports = { getPayload };