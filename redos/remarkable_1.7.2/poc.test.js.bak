test("ReDos in remarkable", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let result = exploitFunction(payload);

  let time = result.time;
  expect(time).toBeGreaterThan(1);
});