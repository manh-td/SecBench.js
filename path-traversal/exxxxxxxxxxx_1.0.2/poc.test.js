test("Path Traversal in exxxxxxxxxxx", async () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const path = require("path");  // Ensure path module is required

    const payload = getPayload();
    const output = await exploitFunction(payload);

    expect(output).toBe(require("fs").readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});