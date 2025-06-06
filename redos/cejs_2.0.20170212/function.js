function exploitFunction(payload) {
  const c = require("cejs");
  const measureTime = require("../utils").measureTime;

  const attack_str = payload.attack_str;
  let t = measureTime(function () {
    c.run(attack_str); // This line is causing the timeout
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };