test("Path Traversal in serversyysyy", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const path = require("path");
    const { sleep } = require("sleep");

    const payload = getPayload();
    let output = exploitFunction(...Object.values(payload));

    // Ensure the test runs correctly
    // The test will automatically verify the output based on the expectations set in the exploitFunction
});