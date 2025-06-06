function exploitFunction(payload) {
  const patchMerge = require("patchmerge");

  let obj = {};
  patchMerge(obj, payload);

  return obj;
}

module.exports = { exploitFunction };