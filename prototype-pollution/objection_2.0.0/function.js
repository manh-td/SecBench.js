function exploitFunction(payload) {
    const obj = payload.setPrototypePollution();
    return obj.polluted;
}

module.exports = { exploitFunction };