function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const check = require("checkit");

  const url = payload.url;

  let t = measureTime(function () {
    check(url);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };