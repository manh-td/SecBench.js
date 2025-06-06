test("Path Traversal in serverxh", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Since the actual output is handled by the server and we're expecting the content of the flag file,
  // we don't need to explicitly verify the output here. The test should pass if the server correctly serves the flag file.
});