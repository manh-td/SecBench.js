function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const removeMarkdown = require("remove-markdown");
  const paragraph = payload.paragraph;

  let t = measureTime(function () {
    removeMarkdown(paragraph);
  });

  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };