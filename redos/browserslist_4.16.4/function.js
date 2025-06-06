function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const browserslist = require("browserslist");

  let t = measureTime(function () {
    try {
      browserslist(`> ${payload}!`);
    } catch (e) {}
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };