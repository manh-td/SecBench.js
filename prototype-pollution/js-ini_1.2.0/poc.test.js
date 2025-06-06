test("Prototype pollution in js-ini", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  expect({}).toHaveProperty('polluted', 'yes');
});