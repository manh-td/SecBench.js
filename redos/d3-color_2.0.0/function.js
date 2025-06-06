function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const d3Color = require("d3-color");

  let t = measureTime(function () {
    d3Color.rgb(payload.attack_str);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };