function exploitFunction(payload) {
  const parse = require("html-dom-parser");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    parse(payload.attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };