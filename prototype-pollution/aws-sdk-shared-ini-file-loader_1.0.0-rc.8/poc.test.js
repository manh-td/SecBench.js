test("prototype pollution in @aws-sdk/shared-ini-file-loader", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    let output = exploitFunction(payload);

    output.then(() => {
        expect({}.polluted).toBe("yes");
    });
});