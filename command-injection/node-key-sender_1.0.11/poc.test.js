test("Command Injection in node-key-sender", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./node-key-sender";

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  // Verify the output
  expect(fs.existsSync(path)).toBe(true);
  fs.unlink(path, function (err) {});
});