function exploitFunction(payload) {
    const utils = require("@firebase/util");
    utils.deepExtend({}, payload);
}

module.exports = { exploitFunction };