function exploitFunction(payload) {
  const merge = require("@brikcss/merge");
  let obj = {};
  
  merge(obj, JSON.parse(payload));
  return obj;
}

module.exports = { exploitFunction };