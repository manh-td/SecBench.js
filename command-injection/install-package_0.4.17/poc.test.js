test("Command Injection in jison", (done) => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  setTimeout(() => {
    done(); // Ensure the test completes within the timeout period
  }, 5000); // Adjust the timeout duration if needed
});

// Optionally, you can add additional verification logic here