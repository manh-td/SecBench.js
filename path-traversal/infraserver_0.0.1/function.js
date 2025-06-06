function exploitFunction(payload) {
  const { exec } = require("child_process");
  const { execSync } = require("child_process");

  const attack_string = `curl -v --path-as-is "http://127.0.0.1:46372${payload()}"`;

  try {
    execSync("fuser -k 46372/tcp", () => {});
    exec(attack_string, (error, stdout) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      return stdout;
    });
  } catch (e) {
    console.error(`Execution failed: ${e}`);
  }
}

module.exports = { exploitFunction };