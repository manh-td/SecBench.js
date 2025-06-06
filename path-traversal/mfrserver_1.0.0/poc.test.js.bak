test("Path Traversal in mfrserver", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  let output = exploitFunction(payload);

  expect(output).toBe(flagContent);
  done();
});