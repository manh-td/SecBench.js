test("Prototype pollution in paypal-adaptive", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(Object.prototype.polluted in output).toBe(true);
    expect(output.polluted).toBe("yes");
});