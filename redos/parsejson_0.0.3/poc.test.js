test("ReDos in parsejson", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;
  const parsejson = require("parsejson");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBeGreaterThan(1); // Verify the output
});