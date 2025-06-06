test("ReDos in highlight.js", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output.time).toBeGreaterThan(1); // Ensure it doesn't take too long
  expect(output.value).toBeDefined(); // Ensure the highlighting was successful
});