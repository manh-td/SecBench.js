test("Path Traversal in pytservce", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const fs = require("fs");

  const payload = getPayload();
  const output = exploitFunction(payload);

  // Verify the output
  const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
  expect(output.includes(hostsFile)).toBe(true);
  done();
});

afterAll(() => {
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}
});