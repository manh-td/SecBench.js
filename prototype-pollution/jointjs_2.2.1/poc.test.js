test("Prototype pollution in jointjs", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect(payload.polluted).toBe("yes");
});