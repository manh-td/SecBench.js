test("Prototype pollution in node-dig", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    const obj = {};
    expect(obj.polluted).toBe("yes");
});