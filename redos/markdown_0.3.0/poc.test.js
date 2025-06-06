test("ReDos in markdown-js", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { measureTime, markdown } = require("../utils");

  const payload = getPayload();
  const result = exploitFunction(payload);

  expect(result.time).toBeGreaterThan(1);
  expect(result.html_content).toBeDefined();
});