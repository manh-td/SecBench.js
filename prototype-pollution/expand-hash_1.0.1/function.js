function exploitFunction(payload) {
    var expandHash = require("expand-hash");
    var obj = {};

    expandHash(payload);

    return obj;
}

module.exports = { exploitFunction };