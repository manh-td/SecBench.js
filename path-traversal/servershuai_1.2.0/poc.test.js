test("Path Traversal in servershuai", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload).then(stdout => stdout).catch(error => error.message);

    // Verify the output
    expect(output).toBe(payload);
});