test("Prototype pollution in nis-utils", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(output.polluted).toBe("yes");
});