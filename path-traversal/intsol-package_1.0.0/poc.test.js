test("Path Traversal in intsol-package", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);  // Pass the payload directly to exploitFunction
});

// Ensure necessary modules are required for Jest to work correctly
beforeAll(() => {
  jest.mock('child_process');
  jest.mock('fs');
  jest.mock('sleep');
});

afterAll(() => {
  jest.clearAllMocks();
});