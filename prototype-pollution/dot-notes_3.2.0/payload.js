function getPayload() {
    const dots = require("dot-notes");
    return {
        __proto__: {
            polluted: "yes"
        }
    };
}

module.exports = { getPayload };