test("Remote code execution in git-lib", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const assert = require('assert');

  const payload = getPayload();
  exploitFunction(payload);

  const path = "./git-lib";
  const file_exist = fs.existsSync(path);

  assert.strictEqual(file_exist, true, "File should exist after payload execution");
});