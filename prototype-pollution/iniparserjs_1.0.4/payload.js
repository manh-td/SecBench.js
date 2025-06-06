function getPayload() {
    return {
        "section1": {
            "__proto__": {
                polluted: "yes"
            }
        }
    };
}

module.exports = { getPayload };