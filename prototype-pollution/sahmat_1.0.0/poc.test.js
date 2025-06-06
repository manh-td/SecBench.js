test("Prototype pollution in sahmat", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    expect(payload.obj.tmp.polluted).toBe("yes");
});