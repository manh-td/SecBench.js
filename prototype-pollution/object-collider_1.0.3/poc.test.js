test("Prototype pollution in object-collider", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect({}.polluted).toBe("yes");
});