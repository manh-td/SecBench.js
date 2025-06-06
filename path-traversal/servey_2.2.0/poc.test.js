test("Path Traversal in servey", async () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const fs = require("fs"); // Require necessary modules

    const payload = getPayload();
    const output = await exploitFunction();

    expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});