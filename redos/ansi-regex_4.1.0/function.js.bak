function exploitFunction(payload) {
  const ansiRegex = require("ansi-regex");
  const measureTime = require("../utils").measureTime;

  const attack_str = payload.attack_str;
  let t = measureTime(function () {
    ansiRegex().test(attack_str); 
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };