test("Prototype pollution in ts-dot-prop", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    const obj = payload.obj;

    exploitFunction(obj);

    expect(obj.__proto__.polluted).toBe("yes");
});