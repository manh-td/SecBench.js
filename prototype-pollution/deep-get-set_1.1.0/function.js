function exploitFunction(payload) {
    const { setPollution } = payload;
    setPollution();

    return {};
}

module.exports = { exploitFunction };