test("Prototype pollution in worksmith", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const obj = exploitFunction(payload);

    expect(obj.polluted).toBe("yes");
});