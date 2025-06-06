test("ReDos in markdown-to-jsx", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const result = exploitFunction(payload);

    expect(result.time).toBeGreaterThan(1);
});