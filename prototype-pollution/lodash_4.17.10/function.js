function exploitFunction(payload) {
    const mergeFn = require("lodash").defaultsDeep;
    const targetObj = {};
    mergeFn(targetObj, payload);
}

module.exports = { exploitFunction };