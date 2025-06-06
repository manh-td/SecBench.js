test("Command Injection in node-latex-pdf", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { expect } = require('expect'); // Ensure expect is imported

  const payload = getPayload();
  exploitFunction(payload[0], done); // Pass done callback to handle asynchronous nature

  // No need for additional verification code as the expect assertions should handle it
});

// Ensure Jest is configured to handle asynchronous tests
afterAll(() => {
  jest.setTimeout(10000); // Increase timeout if needed
});