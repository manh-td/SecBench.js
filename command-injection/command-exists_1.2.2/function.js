function exploitFunction(command) {
  const commandExists = require("command-exists");

  try {
    commandExists.sync(command);
  } catch (error) {
    console.error("Command execution failed:", error);
  }
}

module.exports = { exploitFunction };