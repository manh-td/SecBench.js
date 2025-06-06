function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const strip = require("prompts/lib/util/strip.js");

  let attack_str = payload.attack_str;

  let t = measureTime(function () {
    strip(attack_str);
  });

  let time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };