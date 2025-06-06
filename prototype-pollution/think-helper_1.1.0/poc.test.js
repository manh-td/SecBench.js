test("Prototype pollution in think-helper", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let obj = exploitFunction(payload);

    expect(Object.prototype.polluted).toBe(undefined);
    expect(obj.polluted).toBe("yes");
});