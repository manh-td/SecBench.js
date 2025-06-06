test("prototype pollution in merge-deep2", () => {
    const { exploitFunction } = require("./function.js"); // Ensure the path is correct
    const { getPayload } = require('./payload.js'); // Ensure the path is correct

    const payload = getPayload();
    let output = exploitFunction(payload);

    expect(output.polluted).toBe("yes");
});