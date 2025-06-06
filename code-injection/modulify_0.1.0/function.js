const modulify = require("modulify"); // Ensure modulify is imported

function exploitFunction(payload) {
  modulify.utils.getGlobals(payload);
}

module.exports = { exploitFunction };