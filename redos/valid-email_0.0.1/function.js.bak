function exploitFunction(payload) {
  const validate = require("valid-email");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    validate(payload.badEmail);
  });

  let time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };