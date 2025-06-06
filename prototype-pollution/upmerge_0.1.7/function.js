function exploitFunction(payload) {
  let upmerge = require("upmerge"); // this version is vulnerable
  let obj = {};
  upmerge.merge(obj, JSON.parse(payload));
  return obj;
}

module.exports = { exploitFunction };