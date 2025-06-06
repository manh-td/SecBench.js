test("Prototype pollution in pathval", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect(payload.obj.__proto__.polluted).toBe("yes");
});