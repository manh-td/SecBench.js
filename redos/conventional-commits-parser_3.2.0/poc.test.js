test("ReDos in conventional-commits-parser", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let time = exploitFunction(payload);

  expect(time).toBeGreaterThan(1);
});