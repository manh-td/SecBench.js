function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const colorString = require("color-string");
  let t = measureTime(function () {
    colorString.get(payload.attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };