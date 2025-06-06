function exploitFunction(payload) {
  const MobileDetect = require("mobile-detect");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    let md = new MobileDetect(payload);
    md.phone();
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };