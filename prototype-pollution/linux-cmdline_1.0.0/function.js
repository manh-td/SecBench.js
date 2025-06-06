function exploitFunction(payload) {
  const linuxCmdline = require("linux-cmdline");
  linuxCmdline(payload);
}

module.exports = { exploitFunction };