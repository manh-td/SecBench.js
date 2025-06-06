const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Path Traversal in hftp", () => {
  const payload = getPayload();
  return exploitFunction(payload).then(output => {
    expect(output).toBe(true);
  });
});

// Note: The afterAll block in the original code is not included here as it is not directly related to the verification process.