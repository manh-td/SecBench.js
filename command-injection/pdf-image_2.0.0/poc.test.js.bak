test("Remote code execution in pdf-image", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  // Verify the output
  expect(fs.existsSync("./pdf-image_2")).toBe(true);
});