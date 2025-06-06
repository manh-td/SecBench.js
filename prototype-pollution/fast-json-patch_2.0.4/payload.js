function getPayload() {
    return [
        { op: "replace", path: "/__proto__/polluted", value: "yes" }
    ];
}

module.exports = { getPayload };