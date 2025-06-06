function exploitFunction(payload) {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const urlRegex = require("urlregex");

  let t = measureTime(function () {
    const isValid = urlRegex().test(payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };