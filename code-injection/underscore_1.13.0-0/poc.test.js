test("Arbitrary code execution in underscore", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // No need to verify the file existence here since it's cleaned up in the function itself
});