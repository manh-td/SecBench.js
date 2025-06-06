function exploitFunction(payload) {
    var safeObj = require("safe-obj");

    payload.protoPollution("yes");
    return payload.obj;
}

module.exports = { exploitFunction };