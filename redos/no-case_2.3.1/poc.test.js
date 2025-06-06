test("ReDos in no-case", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { measureTime } = require("../utils"); // Ensure measureTime is required

  const payload = getPayload();
  let time = exploitFunction(payload);

  expect(time).toBeGreaterThan(1);
});