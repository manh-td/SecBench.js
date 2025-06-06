function exploitFunction(payload) {
    const { unflatten } = require("flat-wrap");

    const obj = {};
    unflatten(payload, obj);

    return obj;
}

module.exports = { exploitFunction };