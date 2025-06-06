function exploitFunction(payload) {
  const Remarkable = require("remarkable");
  let md = new Remarkable("commonmark");
  let t = require("../utils").measureTime(function () {
    md.render(payload);
  });
  let time = t[0] + t[1] / 1000000000;
  return { time };
}

module.exports = { exploitFunction };