test("Prototype pollution in node-oojs", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  // Require necessary modules
  const oojs = require('node-oojs');

  const payload = getPayload(oojs);
  const output = exploitFunction(oojs);

  expect(output.polluted).not.toBe(undefined);
});