function exploitFunction(payload) {
  const measureTime = require("../utils").measureTime;
  const markdown = require("markdown").markdown;

  const attack_str = payload;

  let t = measureTime(function () {
    const html_content = markdown.toHTML(attack_str);
    return { time: t[0] + t[1] / 1000000000, html_content };
  });

  return t;
}

module.exports = { exploitFunction };