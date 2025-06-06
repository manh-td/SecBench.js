const { trim } = require("axios/lib/utils");
const measureTime = require("../utils").measureTime;
const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("ReDos in revalidator", () => {
  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBeGreaterThan(1);
});