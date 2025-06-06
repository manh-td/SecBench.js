test("Path Traversal in serve46", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    expect.assertions(1);

    let hostsFile = require("fs").readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    let payload = getPayload();
    let result = exploitFunction(payload);

    expect(result).toBe(hostsFile);
    done();
});

// Ensure to include the necessary modules at the top of your test file
const path = require("path");
const { sleep } = require("sleep");