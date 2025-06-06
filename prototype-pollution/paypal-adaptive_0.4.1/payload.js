function getPayload() {
    return {
        __proto__: { polluted: "yes" },
        userId: "foo",
        password: "bar",
        signature: "abcd",
        appId: "1234",
        sandbox: "1234"
    };
}

module.exports = { getPayload };