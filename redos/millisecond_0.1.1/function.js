function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const ms = require("millisecond");

  let t = measureTime(() => {
    ms(payload.attack_str);
  });

  let time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };