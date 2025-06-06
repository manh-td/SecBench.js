function exploitFunction(payload) {
  const { genstr, measureTime } = require("../utils");
  const { attack_str } = payload;

  let t = measureTime(() => {
    const isSvg = require("is-svg"); // Ensure isSvg is correctly imported
    return isSvg(attack_str);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };