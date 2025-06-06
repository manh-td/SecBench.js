function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const nthCheck = require("nth-check");

  let attack_str = payload.attack_str;

  let t = measureTime(function () {
    try {
      nthCheck.parse(attack_str);
    } catch (e) {}
  });

  let time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };