const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

test("Path Traversal in zxyserver", () => {
  const payload = getPayload();
  const output = exploitFunction(payload);

  return output.then(result => {
    expect(result).toBe(true);
  }).catch(error => {
    throw error;
  });
});