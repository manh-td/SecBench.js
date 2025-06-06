test("Prototype pollution in just-safe-set", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const obj = exploitFunction(payload.obj);

    expect(obj.__proto__.polluted).toBe("yes");
});