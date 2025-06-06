const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');
const fs = require("fs");
const path = require("path");

test("Path Traversal in fast-http-cli", (done) => {
    const payload = getPayload();
    let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    let output = exploitFunction(payload);

    expect(output).toBe(hostsFile);
    done();
});