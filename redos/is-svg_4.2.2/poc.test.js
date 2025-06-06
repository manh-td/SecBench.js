test("ReDos in is-svg", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { measureTime } = require("../utils");

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  expect(output).toBeGreaterThan(1);
});