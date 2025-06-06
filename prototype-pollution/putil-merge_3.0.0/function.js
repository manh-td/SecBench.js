function exploitFunction(payload) {
    const putil_merge = require("putil-merge");
    const obj = {};
    putil_merge(obj, payload, { deep: true });
    return obj;
}

module.exports = { exploitFunction };