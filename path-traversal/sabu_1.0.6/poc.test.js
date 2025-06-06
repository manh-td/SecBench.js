test("Path Traversal in sabu", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  let output = exploitFunction(payload); // Pass the payload to exploitFunction

  // Verify the output
  expect(output).toBe(require("fs").readFileSync(path.resolve(__dirname, "../flag.html")).toString());
  done();
});