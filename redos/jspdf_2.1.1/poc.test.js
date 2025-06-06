test("ReDos in jspdf", () => {
  const measureTime = require("../utils").measureTime;
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let t = measureTime(function () {
    exploitFunction(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  expect(time).toBeGreaterThan(1);
});