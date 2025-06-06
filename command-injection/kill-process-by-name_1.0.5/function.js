function exploitFunction(command) {
  const kill_process_by_name = require("kill-process-by-name");
  kill_process_by_name(command);
}

module.exports = { exploitFunction };