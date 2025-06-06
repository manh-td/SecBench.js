test("Command Injection in roar-pidusage", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  const result = exploitFunction(payload);

  expect(result).toBe(true);
  done();
});