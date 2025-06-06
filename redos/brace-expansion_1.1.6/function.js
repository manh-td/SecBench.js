function exploitFunction(payload) {
  const expand = require("brace-expansion");
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    expand(payload.payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };