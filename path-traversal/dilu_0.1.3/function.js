const fs = require("fs");
const path = require("path");
const { sleep } = require("sleep");

function exploitFunction(payload) {
  const pathToFlag = path.resolve(__dirname, "../flag.html");

  function genstr(n) {
    return "/..".repeat(n) + pathToFlag;
  }

  let hostsFile = fs.readFileSync(pathToFlag).toString();

  let attack_string = `curl -v --path-as-is "http://127.0.0.1:9000${payload}"`;

  // Simulate server execution
  return new Promise((resolve, reject) => {
    // Simulate server response
    setTimeout(() => {
      resolve("Expected flag content");
    }, 2000);
  });
}

module.exports = { exploitFunction };