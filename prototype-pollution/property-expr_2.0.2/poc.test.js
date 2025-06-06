test("Prototype pollution in property-expr", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    
    const payload = getPayload();
    let output = exploitFunction(payload);

    expect({}.polluted).toBe("yes");
});