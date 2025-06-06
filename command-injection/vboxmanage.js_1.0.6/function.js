function exploitFunction(payload) {
  const VBox = require("vboxmanage.js");
  return VBox.start(payload)
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
}

module.exports = { exploitFunction };