function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const pathParse = require("path-parse");

  let t = measureTime(function () {
    let attack_str = payload;
    pathParse(attack_str);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };