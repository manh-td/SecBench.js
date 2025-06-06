function exploitFunction(payload) {
    const { obj } = payload;

    expect(obj.polluted).toBe("yes");
}

module.exports = { exploitFunction };