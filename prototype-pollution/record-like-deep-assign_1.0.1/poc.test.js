test("Prototype pollution in x-assign", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    // Verify the output
    expect(output["polluted"]).toBe("yes");
});