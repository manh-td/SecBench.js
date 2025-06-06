const { exploitFunction } = require("./function.js");
const { getPayload } = require('./payload.js');
const { execSync } = require("child_process");

test("Path Traversal in wuzhuang", () => {
  const payload = getPayload();
  const attack_string = payload.attack_string;

  // Execute the attack string and capture the output
  const stdout = execSync(attack_string);

  // Verify the output
  expect(stdout.toString()).toContain('expected flag content');  // Adjust this to match your expected flag content
});

// If you want to run the exploitFunction as well, you can do so here
// const output = exploitFunction(payload);