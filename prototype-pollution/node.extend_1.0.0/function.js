function exploitFunction(payload) {
    let extend = require("node.extend");
    var obj = {};

    extend(true, obj, payload);
}

module.exports = { exploitFunction };