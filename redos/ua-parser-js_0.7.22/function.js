const measureTime = require("../utils").measureTime;
const ua_parser = require("ua-parser-js");

function exploitFunction(payload) {
  const { MALICIOUS_UA } = payload;

  let t = measureTime(() => {
    ua_parser(MALICIOUS_UA);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };