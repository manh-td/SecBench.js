function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const printf = require("printf");

  let t = measureTime(function () {
    let attack_str = payload.attack_str;
    printf(attack_str, -42);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };