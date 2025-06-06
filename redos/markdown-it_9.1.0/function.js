function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    require("markdown-it")("commonmark").parse(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };