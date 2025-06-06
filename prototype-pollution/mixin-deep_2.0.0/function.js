function exploitFunction(payload) {
    const mixin = require("mixin-deep");
    const obj = {};
    mixin(obj, payload);
    return obj;
}

module.exports = { exploitFunction };