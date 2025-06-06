test("Path Traversal in simple-mock-server", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const fs = require("fs");
    const path = require("path");

    const payload = getPayload();
    let output = exploitFunction(payload);

    const flagFileContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
    expect(output).toBe(flagFileContent);
});