test("Prototype pollution in object-path-set", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const setPath = payload.setPath;
    const obj = payload.obj;

    exploitFunction(setPath, obj);

    expect(obj.polluted).toBe("yes");
});