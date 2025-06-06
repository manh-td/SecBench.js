function exploitFunction(payload) {
    const merge = require("controlled-merge");
    const obj = merge({}, payload, true);
    return obj;
}

module.exports = { exploitFunction };