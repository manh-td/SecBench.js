const expressValidators = require("express-validators");
const measureTime = require("../utils").measureTime;

test("ReDos in revalidator", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBeGreaterThan(1);
});