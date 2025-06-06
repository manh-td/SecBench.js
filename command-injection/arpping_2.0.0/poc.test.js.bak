const expect = require('expect');

test("Remote code execution in arpping", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  return exploitFunction(payload)
    .then(() => {
      // File should exist after the payload execution
      const fs = require("fs");
      const path = "./arpping";
      const file_exist = fs.existsSync(path);
      expect(file_exist).toBe(true);
    })
    .catch((err) => {
      console.error(err);
    });
});