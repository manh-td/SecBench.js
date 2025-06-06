function exploitFunction(payload) {
    const a = require("think-helper");
    const obj = {};
    a.extend(obj, payload);
    return obj;
}

module.exports = { exploitFunction };