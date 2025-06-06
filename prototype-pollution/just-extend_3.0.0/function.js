function exploitFunction(payload) {
    const extend = require("just-extend");
    let obj = {};
    extend(true, obj, payload);
}

module.exports = { exploitFunction };