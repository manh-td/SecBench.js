const measureTime = require("../utils").measureTime;
const color = require("colors-cli/safe");

function exploitFunction(payload) {
  let attack_str = payload.attack_str;
  let t = measureTime(function () {
    color.red(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };