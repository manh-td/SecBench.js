test("ReDos in validator", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const result = exploitFunction(payload);

    expect(result.time).toBeGreaterThan(1);
});