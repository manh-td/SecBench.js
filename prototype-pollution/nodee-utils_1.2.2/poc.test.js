test("Prototype pollution in nodee-utils", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect(payload.targetObj.polluted).toBe("yes");
});