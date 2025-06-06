function exploitFunction(payload) {
  const merge = require("merge-objects");
  const obj = {};
  merge(obj, JSON.parse(JSON.stringify(payload)));
}

module.exports = { exploitFunction };