function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const trim = require("trim");

  let t = measureTime(function () {
    trim(payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };