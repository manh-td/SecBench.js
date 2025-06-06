function exploitFunction(payload) {
  const psnode = require("psnode");
  psnode.kill(payload);  // Pass the payload directly
}

module.exports = { exploitFunction };