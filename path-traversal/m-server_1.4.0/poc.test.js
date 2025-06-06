test("Path Traversal in m-server", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    // Require necessary modules

    const payload = getPayload();
    let output = exploitFunction(payload);

    // Verify the output
    expect(output.stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});

// Ensure Jest is configured to handle ECMAScript Modules
// jest.config.js
module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    testEnvironment: "node",
};