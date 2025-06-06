test("ReDos in mime", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;
  const mime = require("mime");

  const payload = getPayload();
  let output = exploitFunction(payload);

  let time = output.time;
  expect(time).toBeGreaterThan(1);
});