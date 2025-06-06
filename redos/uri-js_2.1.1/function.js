function exploitFunction(payload) {
  const uri = require("uri-js");
  const measureTime = require("../utils").measureTime;
  let t = measureTime(() => {
    uri.parse(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };