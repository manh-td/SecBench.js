test("Arbitrary code execution in reduce-css-calc", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require("./payload.js");

  const payload = getPayload();
  exploitFunction(payload);

  const fs = require("fs");
  const path = "./reduce-css-calc";
  const file_exist = fs.existsSync(path);
  expect(file_exist).toBe(false);
});