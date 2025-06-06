test("Prototype pollution in querymen", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect(Object.getPrototypeOf(Object.getPrototypeOf({})).polluted).toBe("yes");
});