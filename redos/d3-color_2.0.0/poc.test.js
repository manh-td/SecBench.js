test("ReDos in d3-color", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;
  const d3Color = require("d3-color");

  const payload = getPayload();
  let output = exploitFunction(payload);

  let time = output.time;
  expect(time).toBeGreaterThan(1);
});