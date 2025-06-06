test("Command Injection in compass-compile", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { expect } = require('chai'); // Ensure chai is required

  const payload = getPayload();
  let output = exploitFunction(...Object.values(payload));

  // Verify the output
  expect(fs.existsSync("./compass-compile")).to.be.true;
});

// Note: Make sure to install chai for the test to work
// npm install chai