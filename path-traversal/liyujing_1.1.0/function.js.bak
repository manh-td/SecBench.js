const path = require("path");
const { sleep } = require("sleep");

const pathToFlag = path.resolve(__dirname, "../flag.html");

function genstr(n) {
  return "/..".repeat(50) + pathToFlag;
}

function startServer() {
  const { exec } = require("child_process");
  let server = "node ./node_modules/liyujing/index.js";
  let exe = exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }
    console.log(`Server started with output: ${stdout}`);
  });
}

module.exports = { startServer };