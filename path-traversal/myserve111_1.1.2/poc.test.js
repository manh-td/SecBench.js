test("Path Traversal in myserve111", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction();

  expect(output).toBe(fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString());
});