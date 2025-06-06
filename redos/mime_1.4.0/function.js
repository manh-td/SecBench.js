function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const mime = require("mime");

  let str = payload.str;
  let t = measureTime(function () {
    mime.lookup(str);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };