const { expect } = require("chai");
const { sleep } = require("sleep");
const path = require("path");
const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');

test("Path Traversal in aso-server", async (done) => {
  expect.assertions(1);

  try {
    await a.execSync("fuser -k 3000/tcp", () => {});
  } catch (e) {}

  let server = pkg
    .onError(e => console.log(e))
    .onStop(() => {})
    .start('localhost', 3000, srv => {});

  sleep(2);

  let payload = getPayload();
  let output = await exploitFunction(payload);

  expect(output).to.include('flag.html content'); // Adjust based on actual flag.html content

  done();
});

// Note: 'a' and 'pkg' need to be properly defined or mocked for the test to run.