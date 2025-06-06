function exploitFunction(obj, payload, shouldPollute) {
  const root = require("sds");
  if (shouldPollute) {
    root.set(obj, payload, true);
  }
  return obj;
}

module.exports = { exploitFunction };