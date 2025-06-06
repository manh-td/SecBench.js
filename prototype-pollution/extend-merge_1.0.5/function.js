function exploitFunction(payload) {
    const extend_merge = require("extend-merge");
    const obj = {};
    extend_merge.merge(obj, payload);
}

module.exports = { exploitFunction };