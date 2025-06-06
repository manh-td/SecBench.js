function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const charset = require("charset");
  let t = measureTime(function () {
    charset(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };