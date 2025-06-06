test("Prototype pollution in iniparserjs", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload.section1);

    expect({}.polluted).toBe("yes");
});