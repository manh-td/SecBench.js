test("Prototype pollution in safe-object2", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(output).toBe("yes");
    expect({}.polluted).toBe("yes");
});