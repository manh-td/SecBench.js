test("Command Injection in wincred", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // Verify the output
  const path = "./wincred";
  const fileExist = fs.existsSync(path);
  expect(fileExist).toBe(true);
});