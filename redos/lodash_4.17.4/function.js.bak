function exploitFunction(payload) {
  const _ = require("lodash");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    let agent = _.lowerCase(payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };