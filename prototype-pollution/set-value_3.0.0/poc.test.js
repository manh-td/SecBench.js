test("Prototype pollution in set-value", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const { paths, setFn } = getPayload();
    exploitFunction(paths, setFn);

    expect({}.polluted).toBe("yes");
});