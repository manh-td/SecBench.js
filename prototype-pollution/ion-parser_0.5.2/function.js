function exploitFunction(payload) {
  const ION = require("ion-parser");

  ION.parse(payload);
}

module.exports = { exploitFunction };