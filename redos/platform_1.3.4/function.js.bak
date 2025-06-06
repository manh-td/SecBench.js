function exploitFunction(payload) {
  const platform = require("platform");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    var agent = platform.parse(payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };