const path = require("path");
const { sleep } = require("sleep");
const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Path Traversal in dilu", () => {
  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe("Expected flag content");
});