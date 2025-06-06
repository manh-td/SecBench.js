test("ReDos in minimatch", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const minimatch = require("minimatch"); // Ensure minimatch is required here as well

    const payload = getPayload();
    const result = exploitFunction(payload.attack_str);

    expect(result.time).toBeGreaterThan(1);
});