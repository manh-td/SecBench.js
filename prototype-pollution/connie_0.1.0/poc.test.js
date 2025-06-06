test("Prototype pollution in connie", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');

    const payload = getPayload();
    exploitFunction().then((output) => {
        expect(output.polluted).toBe("yes");
    });
});