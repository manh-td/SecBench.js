test("Path Traversal in xbhxbh", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = require("path");

  const payload = getPayload();
  let output = exploitFunction(payload.genstr);

  return output.then(stdout => {
    const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
    expect(stdout).toBe(flagContent);
  }).catch(error => {
    throw error;
  });
});