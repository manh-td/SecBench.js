test("Path Traversal in wffserve", async () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const { fs } = require("fs");
    const expectedOutput = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    const output = await exploitFunction(payload);

    expect(output).toBe(expectedOutput);
});