test("ReDoS in amqp-match", () => {
    const { exploitFunction } = require("./function.js");
    const { getPayload } = require('./payload.js');
    const measureTime = require("../utils").measureTime;

    const { pattern, regex } = getPayload();
    let output = exploitFunction(pattern, regex);

    expect(output.time).toBeGreaterThan(1);
});