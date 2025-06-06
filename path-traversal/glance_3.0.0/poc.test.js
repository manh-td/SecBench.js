const assert = require('assert');
const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Path Traversal in glance", (done) => {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  const payload = getPayload();
  const output = exploitFunction(payload);

  expect(output).toBe(hostsFile);
  done();
});