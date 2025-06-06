function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const date = require("date-and-time");

  let attack_str = payload;
  let t = measureTime(function () {
    date.compile(attack_str);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };