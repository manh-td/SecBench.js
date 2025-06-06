const assert = require("assert");
const path = require("path");
const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Path Traversal in node-static-webserver", (done) => {
  expect.assertions(1);

  const payload = getPayload();
  let output = exploitFunction(payload);

  if (output) {
    assert.strictEqual(output.includes("flag.html"), true, "Expected flag.html content in output");
    done();
  } else {
    done(new Error("No output received"));
  }
});