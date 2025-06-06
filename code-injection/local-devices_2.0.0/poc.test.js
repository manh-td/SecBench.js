const fs = require('fs');  // Import the fs module

test("Arbitrary code execution in local-devices", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  return exploitFunction(payload)
    .then(() => {
      const path = "./local-devices";
      const fileExist = fs.existsSync(path);
      expect(fileExist).toBe(true);
    })
    .catch(error => {
      console.error("Exploit failed:", error);
      throw error;
    });
});