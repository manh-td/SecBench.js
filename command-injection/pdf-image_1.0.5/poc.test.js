test("Command Injection in pdf-image", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();
  let output = exploitFunction(payload);

  try {
    const file_exist = fs.existsSync("./pdf-image");
    expect(file_exist).toBe(true);
  } catch (err) {
    console.error(err);
  }
});