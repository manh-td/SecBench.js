test("ReDos in is-my-json-valid", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const imjv = require("is-my-json-valid");
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBeGreaterThan(1);
});