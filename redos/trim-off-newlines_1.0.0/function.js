function exploitFunction(payload) {
  const trim = require("trim-off-newlines");
  const s = payload.payload;

  const t = require("../utils").measureTime(function () {
    trim(s);
  });

  const time = t[0] + t[1] / 1000000000;

  return { time };
}

module.exports = { exploitFunction };