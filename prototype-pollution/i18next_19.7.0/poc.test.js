test("Prototype Pollution in i18next", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction(payload);

    // The verification code should already be included within the exploitFunction
});