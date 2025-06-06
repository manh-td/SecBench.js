test("Path Traversal in rollup-plugin-serve", (done) => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    // Ensure the server is properly shut down after testing
    setTimeout(() => {
        require("child_process").execSync("fuser -k 9000/tcp", () => {});
        done();
    }, 5000); // Adjust timeout based on your environment
});