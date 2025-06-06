function exploitFunction({ input }) {
  const measureTime = require("../utils").measureTime;
  const CleanCSS = require("clean-css");

  let t = measureTime(() => {
    new CleanCSS({
      level: {
        1: { replaceZeroUnits: false },
        2: true,
      },
    }).minify(input);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };