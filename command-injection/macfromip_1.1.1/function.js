function exploitFunction(payload) {
  const a = require("macfromip");
  a.getMacInLinux(payload, function () {});
}

module.exports = { exploitFunction };