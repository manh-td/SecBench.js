test("Prototype pollution in component-flatten", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect({}.polluted).not.toBe(undefined);
});