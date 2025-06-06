test("Path Traversal in wenluhong11", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path");
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  return new Promise((resolve, reject) => {
    output.then((stdout) => {
      const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
      expect(stdout).toBe(flagContent);
      resolve();
    }).catch(reject);
  });
});