test("Path Traversal in paopao613", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);
});

// Ensure that the exploitFunction is called with the correct payload