test("Arbitrary code execution in is-my-json-valid", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");
  const path = "./is-my-json-valid";

  const payload = getPayload();
  exploitFunction(payload);

  // Verify the output
  const fileExist = fs.existsSync(path);
  expect(fileExist).toBe(true);
  expect(Object.prototype.polluted).toBe("yes");
});