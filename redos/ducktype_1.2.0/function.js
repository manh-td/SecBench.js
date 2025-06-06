function exploitFunction({ attack_str }) {
  const measureTime = require("../utils").measureTime;
  const ducktype = require("ducktype");

  let t = measureTime(function () {
    console.log(ducktype.url.test(attack_str));  // Check if this line is causing the issue
  });

  let time = t[0] + t[1] / 1000000000;

  return time;
}

module.exports = { exploitFunction };