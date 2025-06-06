test("Path Traversal in serverlyj333", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const { sleep } = require("sleep");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(true); // Verify that the payload was successful
});