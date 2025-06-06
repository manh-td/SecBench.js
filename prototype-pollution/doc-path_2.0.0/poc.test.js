test("Prototype pollution in doc-path", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect(Object.getPrototypeOf(payload).polluted).toBe("yes");
});