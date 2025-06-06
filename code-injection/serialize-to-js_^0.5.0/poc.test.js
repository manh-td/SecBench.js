test("Arbitrary code execution in serialize-to-js", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    // Require necessary modules

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(output).toBe(true);
});