function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const emailExistence = require("email-existence");
  let t = measureTime(function () {
    emailExistence.check(payload, () => {});
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };