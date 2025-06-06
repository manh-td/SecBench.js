test("Path Traversal in yyooopack", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  return new Promise((resolve, reject) => {
    output.then(stdout => {
      expect(stdout).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
      resolve();
    }).catch(reject);
  });
});