function exploitFunction(payload) {
  const utils = require("./utils"); // Update the path to the correct location
  utils.wfVars.remove(payload.command, function () {
    // This is the vulnerable part where the payload is executed
  });
}

module.exports = { exploitFunction };