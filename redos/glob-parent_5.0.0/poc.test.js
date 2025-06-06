test("ReDos in glob-parent", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let output = exploitFunction(payload);

  let time = output;
  expect(time).toBeGreaterThan(1);
});