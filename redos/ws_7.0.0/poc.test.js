test("ReDos in revalidator", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const { measureTime } = require("../utils"); // Ensure measureTime is imported

    const payload = getPayload();
    const output = exploitFunction(payload);

    expect(output).toBeGreaterThan(1);
});