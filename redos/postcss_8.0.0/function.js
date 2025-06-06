const { measureTime } = require("../utils");

function exploitFunction(payload) {
  let t = measureTime(() => {
    try {
      postcss.parse(payload);
    } catch (e) {}
  });
  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };