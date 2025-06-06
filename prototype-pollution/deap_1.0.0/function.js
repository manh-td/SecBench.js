function exploitFunction(payload) {
  const deap = require("deap");
  const obj = {};
  deap.merge(obj, JSON.parse(payload));
  return obj;
}

module.exports = { exploitFunction };