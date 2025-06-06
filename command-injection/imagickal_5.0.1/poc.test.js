test("Remote code execution in imagickal", () => {
  const { exploitFunction } = require("./function.js"); // Adjust the path as needed
  const { getPayload } = require('./payload.js'); // Adjust the path as needed

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(fs.existsSync("./imagickal")).toBe(true);
});