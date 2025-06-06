function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const SimpleMarkdown = require("simple-markdown");
  const mdParse = SimpleMarkdown.defaultBlockParse;

  let t = measureTime(function () {
    mdParse(payload);
  });

  let time = t[0] + t[1] / 1000000000;
  return time;
}

module.exports = { exploitFunction };