test("Path Traversal in fbr-client", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const path = require("path"); // Import the path module

    const payload = getPayload();
    let output = exploitFunction(payload); // Pass the payload

    // Verify the output
    expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});