function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const content = require("content");

  let t = measureTime(function () {
    content.disposition(payload.disposition);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };