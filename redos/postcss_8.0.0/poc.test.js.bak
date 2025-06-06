test("ReDos in postcss", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const postcss = require("postcss");
  const measureTime = require("../utils").measureTime;

  const payload = getPayload();
  let time = exploitFunction(payload);

  expect(time).toBeGreaterThan(1);
});