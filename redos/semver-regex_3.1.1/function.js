function exploitFunction(payload) {
  const { attack_str } = payload;
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    semverRegex().test(attack_str);
  });

  let time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };