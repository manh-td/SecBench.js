test("Path Traversal in serveryyl", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const fs = require('fs'); // Require necessary modules

    const payload = getPayload();
    let output = exploitFunction(payload);

    output.then((stdout) => {
        expect(stdout).toBe(fs.readFileSync(payload).toString());
        done();
    }).catch((error) => {
        done(new Error(`Test failed with error: ${error}`));
    });
});