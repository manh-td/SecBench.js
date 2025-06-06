test("Path Traversal in liuyaserver", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    // Require necessary modules
    require("path");
    require("sleep");

    const payload = getPayload();
    let output = exploitFunction(payload).then(stdout => stdout).catch(err => err);

    // Assuming the flag file contains a specific string, e.g., "SECRET FLAG"
    expect(output).toContain("SECRET FLAG"); // Replace with the actual flag content
});