function exploitFunction(payload) {
  const termkit = require("terminal-kit");
  const measureTime = require("../utils").measureTime;

  let t = measureTime(function () {
    termkit.markupWidth(payload.payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };