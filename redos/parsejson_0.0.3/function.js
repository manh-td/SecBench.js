function exploitFunction(payload) {
  const parsejson = require("parsejson");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    parsejson(JSON.stringify(payload));
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };