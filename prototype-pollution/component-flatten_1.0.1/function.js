function exploitFunction(payload) {
    const cf = require("component-flatten");
    cf(payload.tree);
}

module.exports = { exploitFunction };