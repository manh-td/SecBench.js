const { trim } = require("axios/lib/utils");
const measureTime = require("../utils").measureTime;

function exploitFunction(payload) {
  let t = measureTime(function () {
    trim(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };