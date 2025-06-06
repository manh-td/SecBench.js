test("ReDoS in chrono-node", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const measureTime = require("../utils").measureTime; // Ensure this module exists and is correctly imported

    const payload = getPayload();
    let output = exploitFunction(...Object.values(payload));

    // Verify the output
    expect(output.time).toBeGreaterThan(1);
});