test("Command Injection in dns-sync", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./dns-sync";

  // Clean up any existing file
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }

  // Get the payload
  const payload = getPayload();

  // Exploit the function with the payload
  let output = exploitFunction(payload);

  // Verify the output
  expect(output).toBe(true);
  fs.unlink(path, function (err) {});
});