function exploitFunction(payload) {
  const log = require("m-log");
  log.setColorTheme(payload.theme);
}

module.exports = { exploitFunction };