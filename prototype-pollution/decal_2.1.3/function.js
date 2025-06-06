function exploitFunction(payload) {
    const decal = require("decal");
    const target = {};
    decal.extend(target, true, payload);
    return target;
}

module.exports = { exploitFunction };