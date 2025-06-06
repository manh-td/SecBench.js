test("Prototype pollution in rdf-graph-array", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let g = exploitFunction(payload);

    // Verify the output
    expect(Object.prototype.polluted).toBe("JHU");
});