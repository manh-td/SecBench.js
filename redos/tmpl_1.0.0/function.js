function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const tmpl = require("tmpl");
  let t = measureTime(function () {
    tmpl(payload, { day: "tomorrow" });
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };