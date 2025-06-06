test("Path Traversal in willvdb_test_server", async (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const fs = require("fs");

    const payload = getPayload();
    const pathToFlag = path.resolve(__dirname, "../flag.html");
    const hostsFile = fs.readFileSync(pathToFlag).toString();

    try {
        const result = await exploitFunction(payload);
        expect(result).toBe(hostsFile);
        done();
    } catch (error) {
        done(error);
    }
});