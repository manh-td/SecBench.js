function exploitFunction(payload) {
    const assign = require("nested-object-assign");
    const target = {};
    assign(target, payload);
    return target;
}

module.exports = { exploitFunction };