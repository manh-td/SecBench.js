test("Path Traversal in 22lixian", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);  // Pass the payload directly

    // Read the content of the flag file
    const expectedOutput = require("fs").readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    // Verify the output
    expect(output).toBe(expectedOutput);
});