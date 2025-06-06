test("prototype pollution in ini-parser", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload.iniContent);

    expect({}.polluted).toBe("yes");
});