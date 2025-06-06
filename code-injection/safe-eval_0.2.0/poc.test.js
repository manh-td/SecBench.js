test("Arbitrary code execution in safe-eval", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { safeEval } = require('safe-eval'); // Ensure safeEval is available

  const payload = getPayload();
  exploitFunction(payload);

  expect({}.polluted).toBe("yes");
});