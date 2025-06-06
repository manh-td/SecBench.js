test("ReDos in revalidator", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const measureTime = require("../utils").measureTime;

    const payload = getPayload();
    let time = exploitFunction(payload);

    expect(time).toBeGreaterThan(1);
});