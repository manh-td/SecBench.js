test("Path Traversal in datachannel-client", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction();

    // The test will automatically verify the output through the expect assertions inside the exploitFunction
});