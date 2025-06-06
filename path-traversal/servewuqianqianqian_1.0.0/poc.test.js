test("Path Traversal in servewuqianqianqian", async (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = require("path");
  const sleep = require("sleep");

  const payload = getPayload();
  const output = await new Promise((resolve) => {
    exploitFunction(payload, resolve);
  });

  // Read the flag file content
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output.stdout).toBe(flagContent);
  done();
});

afterAll(() => {
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}
});