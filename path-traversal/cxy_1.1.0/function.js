function exploitFunction(payload) {
  const { execSync } = require("child_process");
  afterAll(() => {
    try {
      execSync("fuser -k 8081/tcp");
    } catch (e) {}
  });

  const path = require("path");

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const fs = require("fs");

  let hostsFile = fs.readFileSync(pathToFlag).toString();

  try {
    execSync("fuser -k 8081/tcp", () => {});
  } catch (e) {}

  let server = "node ./node_modules/cxy/index.js";
  let exe = exec(server, (error, stdout) => {});

  // Use the payload directly
  exec(payload.attack_string, (error, stdout) => {
    return stdout;
  });
}

module.exports = { exploitFunction };