function exploitFunction(payload) {
  const kill_by_port = require("kill-by-port");
  kill_by_port.killByPort(payload);
}

module.exports = { exploitFunction };