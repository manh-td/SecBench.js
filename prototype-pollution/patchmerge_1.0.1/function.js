function exploitFunction(payload) {
    var patchMerge = require("patchmerge");
    var obj = {};
    patchMerge(obj, payload);
    return obj;
}

module.exports = { exploitFunction };