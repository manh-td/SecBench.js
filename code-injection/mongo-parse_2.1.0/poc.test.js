test("Arbitrary code execution in mongo-parse", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const fs = require("fs");

  const payload = getPayload();

  exploitFunction({
    input: payload,
    path: "./mongo-parse"
  });

  setTimeout(() => {
    done();
  }, 500);
});