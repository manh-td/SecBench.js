const genstr = require("../utils").genstr; // Ensure genstr is imported

function exploitFunction(payload) {
  let attack_str = payload;
  let t = measureTime(function () {
    attack_str.stripTags();
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };