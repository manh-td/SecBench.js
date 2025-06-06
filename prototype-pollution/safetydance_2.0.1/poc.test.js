test("Prototype pollution in safetydance", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    
    const obj = getPayload();
    exploitFunction(obj);

    // Verify the output
    expect(obj.polluted).toBe("yes");
});