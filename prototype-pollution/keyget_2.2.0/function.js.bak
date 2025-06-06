function exploitFunction(payload) {
    var keyget = require("keyget");
    var obj = payload.obj;

    keyget.set(obj, "polluted", "yes");

    return obj;
}

module.exports = { exploitFunction };