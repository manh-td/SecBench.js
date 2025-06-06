const utils = require("@fabiocaccamo/utils.js");

test("prototype pollution in @fabiocaccamo/utils.js", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    expect({}.polluted).toBe(undefined);

    const payload = getPayload().setPrototypePollution;
    const obj = {};
    payload(obj);

    const output = exploitFunction(obj);
    expect(output).toBe("yes");
});