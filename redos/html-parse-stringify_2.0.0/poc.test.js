test("ReDos in html-parse-stringify", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1);
});