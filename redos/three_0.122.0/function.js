function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const three = require("three");

  let t = measureTime(function () {
    var Color = three.Color;
    new Color(payload.attack_str);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };