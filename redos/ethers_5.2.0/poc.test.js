test("ReDos in ethers", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const measureTime = require("../utils").measureTime;
  const { ethers } = require("ethers");

  const payload = getPayload();
  let output = exploitFunction(payload);

  expect(output).toBe(true);
});