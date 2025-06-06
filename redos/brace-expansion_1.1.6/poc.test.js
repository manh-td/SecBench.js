test("ReDos in brace-expansion", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { measureTime } = require("../utils");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1);
});