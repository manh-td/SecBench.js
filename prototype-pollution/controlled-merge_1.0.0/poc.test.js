test("Prototype pollution in controlled-merge", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(output.prototype.polluted).toBe("yes");
});