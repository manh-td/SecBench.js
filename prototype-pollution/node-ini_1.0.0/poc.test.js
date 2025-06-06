test("Prototype pollution in node-ini", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    // Require necessary modules
    const ini = require("node-ini");

    // Execute the exploit function
    getPayload(); // This sets the polluted property
    exploitFunction();

    // Verify the output
    expect(global.polluted).toBe("yes");
});