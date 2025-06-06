test("Prototype pollution in rfc6902", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(...Object.values(payload));

    expect(output.__proto__.polluted).toBe("yes");
});