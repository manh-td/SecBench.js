test("Prototype pollution in node.extend", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(Object.prototype.polluted).toBe("yes");
});