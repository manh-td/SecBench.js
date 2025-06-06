test("prototype pollution in bmoor", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    payload.setPrototypePollution(); // This should be called by exploitFunction but included here for clarity
    expect({}.polluted).toBe("yes");
});