function exploitFunction(payload) {
    const mergify = require("mergify");
    const obj = {};
    mergify(obj, JSON.parse(payload));
    return obj;
}

module.exports = { exploitFunction };