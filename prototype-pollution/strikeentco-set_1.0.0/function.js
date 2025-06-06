function exploitFunction(payload) {
    const { obj } = payload;
    return obj.polluted;
}

module.exports = { exploitFunction };