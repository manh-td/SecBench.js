function exploitFunction(payload) {
    const deepAssign = require("record-like-deep-assign");

    let obj = {};
    deepAssign(obj, payload);

    return obj;
}

module.exports = { exploitFunction };