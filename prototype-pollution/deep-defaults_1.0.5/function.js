const deepDefaults = require("deep-defaults");

function exploitFunction(payload) {
    var obj = {};
    deepDefaults(obj, payload);
}

module.exports = { exploitFunction };