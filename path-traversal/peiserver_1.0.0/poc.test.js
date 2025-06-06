test("Path Traversal in peiserver", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();
  exploitFunction(payload);

  // Assuming the test framework has a way to capture the output
  // Here we just print the result for demonstration purposes
  // In actual testing, you would check the captured output
  expect(console.log).toHaveBeenCalledWith(true);
});