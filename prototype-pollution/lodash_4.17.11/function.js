function exploitFunction(payload) {
    const _ = require("lodash");
    _.zipObjectDeep(Object.keys(payload), Object.values(payload));
}

module.exports = { exploitFunction };