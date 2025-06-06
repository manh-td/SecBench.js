function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const diceCoefficient = require("natural/lib/natural/distance/dice_coefficient.js");

  let attack_str = payload.attack_str;
  let t = measureTime(function () {
    diceCoefficient(attack_str, attack_str);
  });
  let time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };