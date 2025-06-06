test("Path Traversal in wuzhuangserver", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { expect } = require('expect');  // Correctly import expect
  const fs = require("fs");
  const sleep = require("sleep");

  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(hostsFile);
  done();
});