test("ReDos in ansi-regex", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const assert = require('assert'); // Ensure you have this module installed

  const payload = getPayload();
  const result = exploitFunction(payload);

  // Verify the output
  assert(result.time > 1, "The regex test should take more than 1 second to complete");
});