function exploitFunction(command) {
  const portkiller = require("portkiller");
  portkiller(command);
}

module.exports = { exploitFunction };