test("Prototype pollution in x-assign", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const output = exploitFunction(payload);

    expect({}.polluted).toBe("yes");
});