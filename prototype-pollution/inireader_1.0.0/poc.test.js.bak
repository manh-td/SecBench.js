test("Prototype pollution in inireader", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(...Object.values(payload));

    // Verify the output
    expect({}.polluted).toBe("yes");
});