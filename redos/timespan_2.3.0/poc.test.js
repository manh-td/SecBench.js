test("ReDos in timespan", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const timespan = require("timespan");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBeGreaterThan(1);
});