test("Path Traversal in lihuini", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    // The verification is implicitly handled within the test block itself
});