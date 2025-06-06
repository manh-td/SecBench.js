function exploitFunction(payload) {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;

  const regex = require("url-regex")({ strict: false });
  const t = measureTime(function () {
    return regex.test(payload);
  });

  const time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };