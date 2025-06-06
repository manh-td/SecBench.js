test("Path Traversal in serverzyqzyq", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const path = require("path"); // Ensure path module is imported

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Read the flag file content
  const flagContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

  // Verify the output
  expect(output).toBe(flagContent);
});