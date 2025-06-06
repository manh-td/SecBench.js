function exploitFunction(payload) {
  const globParent = require("glob-parent");
  const measureTime = require("../utils").measureTime;

  let attack_str = payload;
  let t = measureTime(function () {
    globParent(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };