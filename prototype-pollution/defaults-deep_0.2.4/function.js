function exploitFunction(payload) {
    const defaultsDeep = require("defaults-deep");
    let obj = {};
    defaultsDeep(obj, payload);
}

module.exports = { exploitFunction };