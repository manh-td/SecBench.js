function exploitFunction(payload) {
  const moment = require("moment");
  const measureTime = require("../utils").measureTime;

  let str = payload.str;
  let t = measureTime(function () {
    moment(str, "MMM");
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };