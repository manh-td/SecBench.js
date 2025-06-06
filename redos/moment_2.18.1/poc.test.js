test("ReDos in moment", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const moment = require("moment");
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let output = exploitFunction(payload);

  let time = output.time;
  expect(time).toBeGreaterThan(1);
});