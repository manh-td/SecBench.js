function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const isEmail = require("is-email");

  let t = measureTime(function () {
    return isEmail(payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };