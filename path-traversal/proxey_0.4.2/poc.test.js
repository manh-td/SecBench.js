test("Path Traversal in proxey", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let stdout;

  try {
    stdout = exploitFunction(payload);
  } catch (e) {
    throw new Error("Exploit function failed");
  }

  const expectedContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
  expect(stdout).toBe(expectedContent);
  done();
});