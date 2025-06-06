test("Path Traversal in cyber-js", async (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    // Require necessary modules
    const fs = require("fs");
    const path = require("path");

    const payload = getPayload();
    await new Promise((resolve) => {
        exploitFunction(payload).then(output => {
            resolve(output);
        }).catch(error => {
            console.error(`Error during exploit execution: ${error}`);
            resolve(null);
        });
    });

    // Read the actual flag file content
    const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    // Verify the output
    expect(output.stdout).toBe(hostsFile);
    done();
});

// Note: The actual implementation would need to capture the stdout from the exec call and compare it with the flag content.