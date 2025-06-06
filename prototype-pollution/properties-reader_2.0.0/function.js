function exploitFunction(payloadPath) {
  const propertiesReader = require("properties-reader");
  const path = require("path");

  propertiesReader(path.resolve(__dirname, payloadPath));
}

module.exports = { exploitFunction };