test("Path Traversal in pico-static-server", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    // Assuming the test framework provides a way to capture the response
    // and verify it against the expected content of flag.html
    // For example, using a mocking library like sinon or a custom function to capture output
    setTimeout(() => {
        done();
    }, 5000); // Adjust timeout as needed
});

// Note: The actual implementation of capturing and verifying the response
// would depend on the testing framework being used (e.g., Jest, Mocha, etc.)