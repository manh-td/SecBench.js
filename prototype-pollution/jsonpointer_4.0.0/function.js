function exploitFunction(payload) {
    const obj = {};
    payload.setPrototypePollution();
    return obj;
}

module.exports = { exploitFunction };